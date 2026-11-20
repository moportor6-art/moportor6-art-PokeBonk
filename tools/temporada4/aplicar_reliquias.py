"""15 Reliquias nuevas de la Temporada 4: datos, iconos (ya copiados) y la clase de reliquias de la 0.10.13 con sus ganchos."""
import re,sys,json,subprocess
sys.path.insert(0,'/home/claude/temporada4/port'); from extraer import *
T='/home/claude/temporada4/'; S='/home/claude/moportor6-art-pokebonk/site/assets/'
A=open(T+'assets/assets-CTIJW1AK-mwoblfeo.js').read()
D=open(S+'defineProperty-5g46wf9l-mw3e1u3x.js').read(); MO=open(S+'main-Cx4tF-jA-mw3e1u3x.js').read(); ME=open(S+'menus-1ZFEe0vd-mw3e1u3x.js').read()
if 'd(`c-die`' in D: sys.exit('ya aplicado')
def sub(s,old,new):
    assert s.count(old)==1,(old[:70],s.count(old)); return s.replace(old,new)
def call_at(s,i):  # d(...) completa desde i
    k=s.find('(',i);d=0;j=k
    while True:
        c=s[j]
        if c=='`': j=s.find('`',j+1)
        elif c in '([{': d+=1
        elif c in ')]}':
            d-=1
            if d==0: return s[i:j+1]
        j+=1
NEW=['c-die','c-moss','c-knuckle','u-mirror','u-venom','u-mask','r-lens','r-scythe','r-frost','e-whistle','e-cyclone','e-twin','l-clock','l-chalice','l-abyss']
order=re.findall(r'\bd\(`([cureltw]-[\w-]+)`,',A)
for k in NEW:
    ent=call_at(A,A.find('d(`'+k+'`,'))
    prev=order[order.index(k)-1]
    while prev in NEW and ('d(`'+prev+'`,') not in D: prev=order[order.index(prev)-1]
    pe=call_at(D,D.find('d(`'+prev+'`,'))
    D=sub(D,pe,pe+','+ent)
# clase de reliquias de la 0.10.13 en el main
for alias,ex in [('pb4_Nt','Ka'),('pb4_ct','Ja')]:
    m=re.search(r'import\{([^}]*)\}from"\./defineProperty-5g46wf9l-mw3e1u3x\.js"',MO); MO=MO[:m.start(1)]+m.group(1)+','+ex+' as '+alias+MO[m.end(1):]
z=open(T+'port/relics4.js').read(); name=z[:z.find('=class')]
src='function pbRelics(){if(pbRelics.v)return pbRelics.v;\nconst Tu=[[62,27,9,2,0],[34,36,22,7,1],[12,30,36,18,4],[0,14,40,34,12]];\nconst fs=(e,t,n)=>n();\nconst '+z+';\nreturn pbRelics.v='+name+'}'
open('/tmp/_rl.js','w').write(src); json.dump({'B':'pb4_N','F':'pb4_k','H':'pb4_P','L':'pb4_A','Nt':'pb4_Nt','ct':'pb4_ct','z':'pb4_j'},open('/tmp/_rlm.json','w'))
out=subprocess.run(['node',T+'port/renombrar.js','/tmp/_rl.js','/tmp/_rlm.json'],capture_output=True,text=True).stdout
for x,y in [('$1m579vg','$o4dswf'),('$1mfok0u','$h3gy7w'),('$1wa3xxn','$105mh7p'),('$m5if73','$236360'),('$s0z2nd','$v7y1kc'),('$vam3u9','$xj1ewj'),('.bossBanner(','.banner(')]: out=out.replace(x,y)
print('libres:',libres(out)); open(T+'port/relics_out.js','w').write(out)
MO=sub(MO,'\nwindow.__pbT4lib=','\n'+out+'\nwindow.__pbT4lib=')
MO=sub(MO,'relics=new zp(this)','relics=new(pbRelics())(this)')
MO=sub(MO,'$2fzt2e(){if(this.items.has(`old-amber`)','$2fzt2e(){if(this.run.relics?.$1p9uc4l?.(),this.items.has(`old-amber`)')
MO=sub(MO,'if(this.shield>0){let e=Math.min(this.shield,d);this.shield-=e,d-=e}','if(this.shield>0){let e=Math.min(this.shield,d);this.shield-=e,d-=e,e>0&&l.relics&&l.relics.onShield?.(n,this.shield<=0)}')
# ganchos en el combate y los aliados (menus)
ME=sub(ME,'*(e.shiny?eb:1)*r}cooldown(e){','*(e.shiny?eb:1)*r*(this.run.relics?.allyMul?.()??1)}cooldown(e){')
ME=sub(ME,'let t=a.critChance+a.megaCrit+(n.critBonus??0)+p+h;','let t=a.critChance+a.megaCrit+(n.critBonus??0)+p+h+(r.relics.critAdd?.()??0);')
ME=sub(ME,'let b=s.fang,x=0;b&&!(i.flags[e]&(N.Boss|12290))&&i.hp[e]-u>0&&i.hp[e]-u<i.maxHp[e]*(.04+.04*b)&&(x=i.hp[e]-u,u=i.hp[e],','let b=s.fang,x=0,pbTe=r.relics.executeBelow?.()??0,pbD=b?.04+.04*b:0;(b||pbTe)&&!(i.flags[e]&(N.Boss|12290))&&i.hp[e]-u>0&&i.hp[e]-u<i.maxHp[e]*Math.max(pbD,pbTe)&&(i.hp[e]-u<i.maxHp[e]*pbD?x=i.hp[e]-u:r.relics.onExecute?.(),u=i.hp[e],')
ME=sub(ME,'x>0&&this.itemDmg(`razor-fang`,Math.min(x,w)),','x>0&&this.itemDmg(`razor-fang`,Math.min(x,w)),!n.fixed&&!n.echo&&!n.src&&w>0&&r.relics.twin?.(e,w,n.type,n.cls),')
open(S+'defineProperty-5g46wf9l-mw3e1u3x.js','w').write(D); open(S+'main-Cx4tF-jA-mw3e1u3x.js','w').write(MO); open(S+'menus-1ZFEe0vd-mw3e1u3x.js','w').write(ME); print('ok')
