import re,sys,json,subprocess
sys.path.insert(0,'/home/claude/temporada4/port'); from extraer import *
T='/home/claude/temporada4/'; MO='/home/claude/moportor6-art-pokebonk/site/assets/main-Cx4tF-jA-mw3e1u3x.js'
mo=open(MO).read()
if 'pbSummit' in mo: sys.exit('ya aplicado')
m=re.search(r'import\{([^}]*)\}from"\./three-C6GX2F5d\.js"',mo); mo=mo[:m.start(1)]+m.group(1)+',T as pb4_wi'+mo[m.end(1):]
d=json.load(open(T+'port/tv.json'))
src='function pbSummit(){if(pbSummit.v)return pbSummit.v;\n'+'\n'.join(d['consts'].values())+'\nconst '+d['tv']+';\n'+';'.join(d['static'])+';\nreturn pbSummit.v={C:tv,L:J_}}'
mp={n:'pb4_'+n for n in ['V','Ki','B','H','bi','zi','va','I','xn','k','A','N','be','y','ms','P','j','wi']}; mp.update({'U':'X','Xa':'dm'})
open('/tmp/_s.js','w').write(src); json.dump(mp,open('/tmp/_sm.json','w'))
out=subprocess.run(['node',T+'port/renombrar.js','/tmp/_s.js','/tmp/_sm.json'],capture_output=True,text=True).stdout
for x,y in [('$49mzl3','$104j38w'),('$p01qsg','$1hzn9kq'),('$19gsplu','$17qigu8'),('$1d1pvjo','$6n01od'),('$1f9hnim','$10x0isn'),('.bossBanner(','.banner(')]: out=out.replace(x,y)
print('libres:',libres(out)); print('$:',sorted(set(re.findall(r'\$[a-z0-9]{5,8}',out))))
open(T+'port/summit_arena_out.js','w').write(out)
def sub(old,new):
    global mo
    assert mo.count(old)==1,old[:60]; mo=mo.replace(old,new)
sub('e.arena===`rage`?pbRage().L:','e.arena===`rage`?pbRage().L:e.arena===`summit`?pbSummit().L:')
sub('t.arena===`rage`?new(pbRage().C)(e,t):','t.arena===`rage`?new(pbRage().C)(e,t):t.arena===`summit`?new(pbSummit().C)(e,t):')
sub('\nwindow.__pbT4lib=','\n'+out+'\nwindow.__pbT4lib=')
open(MO,'w').write(mo); print('ok')
