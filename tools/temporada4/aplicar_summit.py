"""Pasa la forma `summit` (Monte Plateado) de la 0.10.13 al motor del Remaster (menus-…js)."""
import re,sys,json,subprocess
sys.path.insert(0,'/home/claude/temporada4/port'); from extraer import *
T='/home/claude/temporada4/'
M='/home/claude/moportor6-art-pokebonk/site/assets/menus-1ZFEe0vd-mw3e1u3x.js'
b=open(M).read()
if 'generateSummit(){' in b: sys.exit('ya aplicado')
a=open(T+'assets/moves-BBKe7LrW-mwoblfeo.js').read()
r=extraer(a,['Ni'],importados(a))
helpers='var pbSmNi=(()=>{'+''.join(c for n,(c,p) in sorted(r.items(),key=lambda x:x[1][1]))+'return Ni})();'
mp=T+'port/map_sm.json'; json.dump({'h':'Bc','x':'sd','S':'ad','Ni':'pbSmNi','ba':'3.5'},open(mp,'w'))
def ren(code,wrap=False):
    f='/tmp/_r.js'; open(f,'w').write(code)
    return subprocess.run(['node',T+'port/renombrar.js',f,mp],capture_output=True,text=True).stdout
helpers=ren(helpers)
gen=ren(open(T+'port/m_generateSummit.js').read()); env=ren(open(T+'port/m_placeSummitEnv.js').read()); ice=ren(open(T+'port/m_iceAt.js').read())
def sub(old,new):
    global b
    assert b.count(old)==1,old[:60]; b=b.replace(old,new)
sub('function nf(',helpers+'function nf(')
sub('if(this.biome.shape===`lake`){this.generateLake();return}','if(this.biome.shape===`lake`){this.generateLake();return}if(this.biome.shape===`summit`){this.generateSummit();return}')
sub('||this.valley||this.lake){let t=await Ed(e,','||this.valley||this.lake||this.summit){let t=await Ed(e,')
sub(':this.lake?[`grass`,`reeds`,`mud`,`sand`,`cliff`,`pebble`]:',':this.lake?[`grass`,`reeds`,`mud`,`sand`,`cliff`,`pebble`]:this.summit?[`meadow`,`gravel`,`dirtysnow`,`snow`,`cliff`,`ice`]:')
sub('this.lake?this.placeLakeEnv(t):','this.lake?this.placeLakeEnv(t):this.summit?this.placeSummitEnv(t):')
sub('this.lake&&(u.LAKE=1,u.TILED=1)','this.lake&&(u.LAKE=1,u.TILED=1),this.summit&&(u.SUMMIT=1,u.TILED=1)')
sub('#elif defined(ANCIENT)',open(T+'port/glsl_summit.txt').read()+'#elif defined(ANCIENT)')
sub('placeValleyEnv(e){',env+gen+ice+'placeValleyEnv(e){')
sub('yd.ilextime=','yd.plateado=bd({tree:.085,big:.05,small:.05,sway:.04,still:[`tree3`,`tree4`,`big0`,`big1`,`big3`,`big4`,`small2`,`small3`,`small4`]}),yd.silversummit=bd({tree:.155,big:.06,small:.05,sway:.03,treeCollider:1.7,still:[`tree1`,`tree3`,`tree4`,`tree5`,`big0`,`big1`,`big3`,`big4`,`small0`,`small1`,`small3`,`small4`,`small6`]}),yd.ilextime=')
open(M,'w').write(b); print('ok', len(helpers), len(gen), len(env))
