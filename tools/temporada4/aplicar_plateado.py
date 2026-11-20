"""Mecánica del Monte Plateado (clase `ph` de la 0.10.13 y su ayudante Gm) en el main del Remaster, con alias pb4_*."""
import re,sys,json,subprocess
sys.path.insert(0,'/home/claude/temporada4/port'); from extraer import *
T='/home/claude/temporada4/'; S='/home/claude/moportor6-art-pokebonk/site/assets/'
MO=S+'main-Cx4tF-jA-mw3e1u3x.js'; ME=S+'menus-1ZFEe0vd-mw3e1u3x.js'
mo=open(MO).read(); me=open(ME).read()
if 'pbPlateado' in mo: sys.exit('ya aplicado')
# nombre 0.10 -> (módulo nuestro, export)
TH='./three-C6GX2F5d.js'; MN='./menus-1ZFEe0vd-mw3e1u3x.js'
ALI={'V':(TH,'bt'),'Ki':(TH,'rt'),'B':(TH,'I'),'H':(TH,'K'),'bi':(TH,'Y'),'zi':(TH,'q'),'va':(TH,'_'),
     'I':(MN,'io'),'xn':(MN,'Do'),'k':(MN,'Aa'),'A':(MN,'ho'),'N':(MN,'ko'),'be':(MN,'pbGrad'),'y':(MN,'$a'),'ms':(MN,'Ar'),
     'P':('./defineProperty-5g46wf9l-mw3e1u3x.js','t'),'j':('./i18n-BGHWfjZr-mw3e1u3x.js','u')}
# exportar el degradado toon de menus
if 'jd as pbGrad' not in me:
    i=me.rfind('export{'); me=me[:i]+'export{jd as pbGrad,'+me[i+7:]
# añadir alias a las importaciones del main
for n,(src,ex) in ALI.items():
    m=re.search(r'import\{([^}]*)\}from"'+re.escape(src)+'"',mo)
    mo=mo[:m.start(1)]+m.group(1)+','+ex+' as pb4_'+n+mo[m.end(1):]
a=open(T+'assets/main-CzNveX-4-mwoblfeo.js').read()
consts=json.load(open(T+'port/ph_consts.json'))
ph=open(T+'port/ph.js').read()
src='function pbPlateado(){if(pbPlateado.v)return pbPlateado.v;\n'+'\n'.join(consts.values())+'\nconst '+ph+';\nreturn pbPlateado.v=ph}'
mp={n:'pb4_'+n for n in ALI}
open('/tmp/_p.js','w').write(src); json.dump(mp,open('/tmp/_pm.json','w'))
out=subprocess.run(['node',T+'port/renombrar.js','/tmp/_p.js','/tmp/_pm.json'],capture_output=True,text=True).stdout
for x,y in [('$49mzl3','$104j38w'),('$p01qsg','$1hzn9kq'),('$19gsplu','$17qigu8'),('$1d1pvjo','$6n01od'),('.bossBanner(','.banner(')]: out=out.replace(x,y)
left=libres(out); print('libres:',left)
open(T+'port/plateado_out.js','w').write(out)
assert mo.count('\nwindow.__pbT4lib=')==1; mo=mo.replace('\nwindow.__pbT4lib=','\n'+out+'\nwindow.__pbT4lib=',1)
open(MO,'w').write(mo); open(ME,'w').write(me); print('ok')
