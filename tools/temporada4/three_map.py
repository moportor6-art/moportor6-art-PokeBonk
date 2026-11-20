import re
def firma(s,loc):
    m=re.search(r'(?:[,; ]|^)'+re.escape(loc)+r'=(class|function)',s)
    if not m: 
        m2=re.search(r'(?:[,; ])'+re.escape(loc)+r'=([^,;]{0,30})',s); return ('val',m2.group(1)) if m2 else None
    seg=s[m.start():m.start()+1500]
    t=re.search(r'this\.type=`(\w+)`',seg)
    if t: return ('type',t.group(1))
    f=re.search(r'this\.(is[A-Z]\w+)=!0',seg)
    if f: return ('is',f.group(1))
    return ('raw',re.sub(r'\b[A-Za-z_$][\w$]{0,2}\b','x',seg[:200]))
def tabla(path):
    s=open(path).read(); ex=dict((b,a) for a,b in re.findall(r'([\w$]+) as ([\w$]+)',s[s.rfind('export{'):]))
    return s,ex
def traducir(exp4):
    s4,e4=tabla('/home/claude/temporada4/assets/three-CchHtWbL.js'); so,eo=tabla('/home/claude/moportor6-art-pokebonk/site/assets/three-C6GX2F5d.js')
    f=firma(s4,e4[exp4])
    for e,l in eo.items():
        if firma(so,l)==f: return e,f
    return None,f
