"""Aplica el santuario de Suicune (arena `rage` y su kit) de la 0.10.13 al Remaster."""
import re,sys
P='/home/claude/temporada4/port/'
S='/home/claude/moportor6-art-pokebonk/site/assets/'
MO=S+'main-Cx4tF-jA-mw3e1u3x.js'; ME=S+'menus-1ZFEe0vd-mw3e1u3x.js'
mo=open(MO).read(); me=open(ME).read()
if 'pbRage' in mo: sys.exit('ya aplicado')
def sub(s,old,new):
    assert s.count(old)==1,old[:60]; return s.replace(old,new)
# main: importar MeshBasicMaterial y DataTexture, arena y su disposición
m=re.search(r'import\{([^}]*)\}from"\./three-C6GX2F5d\.js"',mo)
mo=mo[:m.start(1)]+m.group(1)+',D as pbDT,q as pbMBM'+mo[m.end(1):]
mo=sub(mo,'e.arena===`ilex`?Oh:hm','e.arena===`ilex`?Oh:e.arena===`rage`?pbRage().L:hm')
mo=sub(mo,'t.arena===`ilex`?new Mh(e,t):new _m(e,t)','t.arena===`ilex`?new Mh(e,t):t.arena===`rage`?new(pbRage().C)(e,t):new _m(e,t)')
mo=sub(mo,'Xi(),WS();window.__pbT4lib','Xi(),WS();'+open(P+'arena_out.js').read()+'\nwindow.__pbT4lib')
# menus: generateArena de la 0.10.13 (admite sink/bowl), catálogo ragelake y kit de Suicune
i=me.find('generateArena(');k=me.find('{',i);d=0
while True:
    c=me[k]
    if c=='`': k=me.find('`',k+1)
    elif c=='{':d+=1
    elif c=='}':
        d-=1
        if d==0:break
    k+=1
me=me[:i]+open(P+'genArena_out.js').read()+me[k+1:]
me=sub(me,'yd.ilextime=','yd.ragelake=xd(bd({tree:.155,big:.06,small:.05,sway:.04,treeCollider:1.7,still:[`tree1`,`tree3`,`tree5`,`big1`,`big2`,`big3`,`big4`,`small2`,`small3`,`small4`,`small6`]}),{big0:[`rage_lamp`,.8,2.2]}),yd.ilextime=')
me=sub(me,'n===`ilex`&&(r===251||pk)?new zP(e,t):null}','n===`ilex`&&(r===251||pk)?new zP(e,t):n===`rage`&&(r===245||pk)?new(pbSuicune())(e,t):null}'+open(P+'kit_out.js').read())
open(MO,'w').write(mo); open(ME,'w').write(me); print('ok')
