import re,sys,json,subprocess
sys.path.insert(0,'/home/claude/temporada4/port'); from extraer import *
T='/home/claude/temporada4/'; ME='/home/claude/moportor6-art-pokebonk/site/assets/menus-1ZFEe0vd-mw3e1u3x.js'
me=open(ME).read()
if 'pbEntei' in me: sys.exit('ya aplicado')
d=json.load(open(T+'port/lt.json'))
src='function pbEntei(){if(pbEntei.v)return pbEntei.v;\n'+'\n'.join(d['consts'].values())+'\nconst '+d['lt']+';\nreturn pbEntei.v=Lt}'
open('/tmp/_e.js','w').write(src); json.dump({'k':'UN','l':'A','m':'k','p':'c','w':'D'},open('/tmp/_em.json','w'))
out=subprocess.run(['node',T+'port/renombrar.js','/tmp/_e.js','/tmp/_em.json'],capture_output=True,text=True).stdout
for x,y in [('$1m579vg','$o4dswf'),('$9sezp3','$l5rpqv'),('.bossBanner(','.banner(')]: out=out.replace(x,y)
print('libres:',libres(out))
old='n===`rage`&&(r===245||pk)?new(pbSuicune())(e,t):null}'
assert me.count(old)==1
me=me.replace(old,'n===`rage`&&(r===245||pk)?new(pbSuicune())(e,t):n===`summit`&&(r===244||pk)?new(pbEntei())(e,t):null}'+out)
open(ME,'w').write(me); print('ok')
