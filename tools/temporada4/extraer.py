"""Extrae de un bundle de la 0.10.13 definiciones de ámbito de módulo y sus dependencias libres (recursivo)."""
import re,json,subprocess,sys
def blk_end(s,k,open_='{'):
    d=0
    while True:
        c=s[k]
        if c=='`': k=s.find('`',k+1)
        elif c in '([{': d+=1
        elif c in ')]}':
            d-=1
            if d==0: return k
        k+=1
def defn(src,n):
    m=re.search(r'function '+re.escape(n)+r'\(',src)
    if m:
        k=src.find('{',m.start()); return src[m.start():blk_end(src,k)+1], m.start()
    for m in re.finditer(r'(?:^|[,;}]|var |let |const )'+re.escape(n)+r'=(?!=)',src):
        i=m.end(); d=0; k=i
        while k<len(src):
            c=src[k]
            if c=='`': k=src.find('`',k+1)
            elif c in '([{': d+=1
            elif c in ')]}':
                if d==0: break
                d-=1
            elif c in ',;' and d==0: break
            k+=1
        return 'const '+n+'='+src[i:k]+';', m.start()
    return None,None
def libres(code):
    open('/tmp/_l.js','w').write(code)
    return json.loads(subprocess.run(['node','/home/claude/temporada4/port/libres.js','/tmp/_l.js'],capture_output=True,text=True).stdout)
def extraer(src,raices,conocidos):
    out={};todo=list(raices)
    while todo:
        n=todo.pop(0)
        if n in out or n in conocidos: continue
        code,pos=defn(src,n)
        if code is None: print('NO ENCONTRADO',n,file=sys.stderr); out[n]=(None,0); continue
        out[n]=(code,pos)
        for f in libres(code):
            if f!=n and f not in out and f not in conocidos: todo.append(f)
    return out
def importados(src):
    s=set()
    for names,_ in re.findall(r'import\{([^}]*)\}from"([^"]+)"',src):
        for p in names.split(','):
            p=p.strip(); 
            if not p: continue
            s.add(p.split(' as ')[-1])
    return s
def clase_que_contiene(s,i):
    """Nombre y código de la clase (X=class{...} o class X{...}) que encierra la posición i."""
    for m in reversed(list(re.finditer(r'(?:[,;\s}(]|^)([\w$]+)=class\b|class ([\w$]+)\b',s[:i]))):
        k=s.find('{',m.end()-1); e=blk_end(s,k)
        if e>i: return (m.group(1) or m.group(2)), s[m.start()+ (1 if s[m.start()] in ',; }(' else 0):e+1]
    return None,None
