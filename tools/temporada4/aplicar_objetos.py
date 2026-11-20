"""10 objetos nuevos de la Temporada 4 (Bolas de Kurt y clásicos de Johto) + Confite Trébol."""
import re,sys
T='/home/claude/temporada4/'; S='/home/claude/moportor6-art-pokebonk/site/assets/'
A=open(T+'assets/assets-CTIJW1AK-mwoblfeo.js').read()
D=open(S+'defineProperty-5g46wf9l-mw3e1u3x.js').read(); MO=open(S+'main-Cx4tF-jA-mw3e1u3x.js').read(); ME=open(S+'menus-1ZFEe0vd-mw3e1u3x.js').read()
if '{key:`love-ball`' in D: sys.exit('ya aplicado')
KEYS=['love-ball','lure-ball','level-ball','heavy-ball','friend-ball','up-grade','light-ball','dragon-scale','fast-ball','clear-bell']
def entry(k):
    i=A.find('{key:`'+k+'`'); d=0;j=i
    while True:
        c=A[j]
        if c=='`': j=A.find('`',j+1)
        elif c=='{':d+=1
        elif c=='}':
            d-=1
            if d==0: return A[i:j+1]
        j+=1
def sub(s,old,new,n=1):
    assert s.count(old)==n,(old[:70],s.count(old)); return s.replace(old,new)
# datos (la función de traducción de defineProperty también se llama t)
D=sub(D,'{key:`focus-sash`,',','.join(entry(k) for k in KEYS)+',{key:`focus-sash`,')
prices=dict(re.findall(r'x\(`([\w-]+)`,([\de.]+)\)',A))
D=sub(D,'g(`old-amber`,3e3)]','g(`old-amber`,3e3),'+','.join(f'g(`{k}`,{prices[k]})' for k in KEYS)+']')
# jugador (main)
MO=sub(MO,'W(this,`amberT`,25)','W(this,`amberT`,25),W(this,`frenzy`,0),W(this,`lureZone`,-1),W(this,`lureStacks`,0),W(this,`bellT`,15),W(this,`bellAt`,[]),W(this,`bellHp`,[])')
m=re.search(r'this\.items\.has\(`coin-case`\)&&e\(1\+this\.\$\w+\(\),`coin-case`\);',MO)
MO=MO[:m.end()]+'{let r=this.items.get(`level-ball`);r&&e(1+this.levelBallBonus()*r,`level-ball`);let i=this.items.get(`heavy-ball`);i&&e(1+this.heavyBallBonus()*i,`heavy-ball`);let a=this.items.get(`friend-ball`);a&&e(1+this.friendBallBonus()*a,`friend-ball`),this.items.has(`up-grade`)&&e(1+this.upGradeBonus(),`up-grade`),this.items.has(`lure-ball`)&&e(1+this.lureBonus(),`lure-ball`),this.items.has(`fast-ball`)&&e(1+this.frenzyBonus(),`fast-ball`)}'+MO[m.end():]
MO=sub(MO,'this.items.has(`rage-candy-bar`)&&(d*=1.1);','this.items.has(`rage-candy-bar`)&&(d*=1.1),this.items.has(`fast-ball`)&&(d*=1.1);')
MO=sub(MO,'l.stats.damageTaken+=d,l.stats.hits++,','l.stats.damageTaken+=d,l.stats.hits++,d>0&&this.items.has(`clear-bell`)&&(this.bellAt.push(l.time),this.bellHp.push(d),this.bellAt.length>400&&(this.bellAt.shift(),this.bellHp.shift())),')
MO=sub(MO,'this.items.has(`old-amber`)&&(this.amberT-=e)<=0&&this.amberFlight();let a=this.items.get(`fresh-water`)','this.items.has(`old-amber`)&&(this.amberT-=e)<=0&&this.amberFlight(),this.frenzy>0&&(this.frenzy=Math.max(0,this.frenzy-6*e)),this.items.has(`clear-bell`)&&(this.bellT-=e)<=0&&this.ringBell();let a=this.items.get(`fresh-water`)')
kill=open(T+'port/kill_items.js').read().replace('r.$1mfok0u(u)','r.$h3gy7w(u)').replace('r.flags[e]&v.Elite','r.flags[e]&1')
MO=sub(MO,"src:`leaf-stone`});this.heal(this.maxHp*.01)}","src:`leaf-stone`});this.heal(this.maxHp*.01)}{"+kill.rstrip(',')+';}')
METH='levelBallBonus(){return Math.min(.25,this.level*.005)}heavyBallBonus(){return Math.min(.3,Math.max(0,this.maxHp-100)/2500)}friendBallBonus(){return .06*(this.run.allies?.list.length??0)}upGradeBonus(){return Math.min(.35,.025*this.items.size)}lureBonus(){return this.lureZone===this.lureKey()?this.lureStacks:0}frenzyBonus(){return Math.min(140,this.frenzy)*.0025}lureKey(){return this.run.endless?1e3+Math.floor(this.run.endless.clock/300):this.run.stage}ringBell(){let e=this.run,t=this.pos,n=e.time;this.bellT=15;let r=0;for(let e=0;e<this.bellAt.length;e++)n-this.bellAt[e]<=6&&(r+=this.bellHp[e]);this.bellAt.length=0,this.bellHp.length=0,r>0&&this.heal(r*.75);let i=9*Math.sqrt(this.stats.area);e.vfx.ring(t.x,t.y,t.z,i,16769162,.6),e.vfx.ring(t.x,t.y,t.z,i*.6,16777215,.45),e.vfx.burst(t.x,t.y+1.6,t.z,16765498,22,7,N.Star,.6,.7),e.audio.shot(`fire`,.6);for(let n of e.enemies.within(t.x,t.z,i))e.combat.hit(n,80*(1+this.level*.09),{type:`fire`,cls:`special`,status:`burn`,statusChance:.8,knock:5,noReact:!0,src:`clear-bell`})}'
MO=sub(MO,'$kiikf(e){let t=this.run,n=t.enemies,r=this.pos;',METH+'$kiikf(e){let t=this.run,n=t.enemies,r=this.pos;')
# combate (menus)
ME=sub(ME,'n.thunder=t.get(`thunder-stone`)??0}','n.thunder=t.get(`thunder-stone`)??0,n.love=t.get(`love-ball`)??0,n.scale=t.get(`dragon-scale`)??0}')
ME=sub(ME,'i.root[e]>0&&s.grip&&(u*=1.1);','i.root[e]>0&&s.grip&&(u*=1.1),i.charm[e]>0&&s.love&&(u*=1.15);')
ME=sub(ME,'if(n.noReact||(u=this.reactions(e,u,n)),','if(n.noReact||(()=>{let t=u;u=this.reactions(e,u,n),s.scale&&u!==t&&(u*=1+.3*s.scale)})(),')
ME=sub(ME,'s.grip&&k.chance(.06*s.grip*o)&&this.$xj1ewj(e,`root`,t),','s.grip&&k.chance(.06*s.grip*o)&&this.$xj1ewj(e,`root`,t),s.love&&k.chance(.05*s.love*o)&&this.$xj1ewj(e,`charm`,t),')
ME=sub(ME,'/(1+.15*(this.run.player.items.get(`lemonade`)??0))}','/(1+.15*(this.run.player.items.get(`lemonade`)??0))/(1+.1*(this.run.player.items.get(`friend-ball`)??0))}')
open(S+'defineProperty-5g46wf9l-mw3e1u3x.js','w').write(D); open(S+'main-Cx4tF-jA-mw3e1u3x.js','w').write(MO); open(S+'menus-1ZFEe0vd-mw3e1u3x.js','w').write(ME)
print('ok', {k:prices[k] for k in KEYS})
