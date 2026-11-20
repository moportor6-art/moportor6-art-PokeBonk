"""Interruptor de la zona de pruebas (PB_T4_ON) para el botín nuevo y la Grieta fusionada injertada en nuestras grietas."""
import re,sys
S='/home/claude/moportor6-art-pokebonk/site/assets/'
D=open(S+'defineProperty-5g46wf9l-mw3e1u3x.js').read(); MO=open(S+'main-Cx4tF-jA-mw3e1u3x.js').read(); ME=open(S+'menus-1ZFEe0vd-mw3e1u3x.js').read()
if 'get fuseOn()' in ME: sys.exit('ya aplicado')
def sub(s,old,new):
    assert s.count(old)==1,(old[:80],s.count(old)); return s.replace(old,new)
IT='[`love-ball`,`lure-ball`,`level-ball`,`heavy-ball`,`friend-ball`,`up-grade`,`light-ball`,`dragon-scale`,`fast-ball`,`clear-bell`]'
RL='[`c-die`,`c-moss`,`c-knuckle`,`u-mirror`,`u-venom`,`u-mask`,`r-lens`,`r-scythe`,`r-frost`,`e-whistle`,`e-cyclone`,`e-twin`,`l-clock`,`l-chalice`,`l-abyss`]'
# objetos: solo salen en la zona de pruebas (o cuando sea oficial)
D=sub(D,'gt=(e,t)=>!pt.has(t)||e.itemsOwned.includes(t)','gt=(e,t)=>'+IT+'.includes(t)?!!window.PB_T4_ON?.():!pt.has(t)||e.itemsOwned.includes(t)')
# Confite Trébol en la tienda de la Mochila solo cuando sea oficial
D=sub(D,'...Nt?[`everstone`]:[],`clover-sweet`]','...Nt?[`everstone`]:[],...window.PB_T4_OFICIAL?[`clover-sweet`]:[]]')
MO=sub(MO,'e.has(`clover-sweet`)&&this.tempMods.push','e.has(`clover-sweet`)&&window.PB_T4_ON?.()&&this.tempMods.push')
# reliquias nuevas: solo en las cartas de la zona de pruebas
MO=sub(MO,'pb4_Nt.filter(t=>t.rarity===e&&!this.has(t.key)&&!r.includes(t))','pb4_Nt.filter(t=>t.rarity===e&&!this.has(t.key)&&!r.includes(t)&&(!'+RL+'.includes(t.key)||!!window.PB_T4_ON?.()))')
# Grieta fusionada (3 Inciensos) sobre nuestras grietas por tiempo
ME=sub(ME,'use(){let e=this.run;if(e.teamRifts.enabled){e.teamRifts.use();return}let t=this.useBlock();','use(pbF=!1){let e=this.run;if(e.teamRifts.enabled){pbF||e.teamRifts.use();return}if(pbF&&!this.fuseOn)return;let t=this.useBlock(pbF);')
ME=sub(ME,'e.incense--,this.openTear(n,r)}','e.incense-=pbF?3:1,this.openTear(n,r,pbF)}get fuseOn(){return this.enabled&&!!window.PB_T4_ON?.()}get canFuse(){return this.fuseOn&&this.run.incense>=3&&!this.entrance&&!this.inside&&!this.busy}')
ME=sub(ME,'useBlock(){let e=this.run;return this.enabled?','useBlock(pbF=!1){let e=this.run;return this.enabled?')
ME=sub(ME,'algunos Alfas.`):this.enterBlock():c(`Las grietas solo se abren en el modo clásico.`)','algunos Alfas.`):pbF&&e.incense<3?c(`Para una grieta fusionada hacen falta {n} Inciensos (llevas {k}).`,{n:3,k:e.incense}):this.enterBlock():c(`Las grietas solo se abren en el modo clásico.`)')
ME=sub(ME,'openTear(e,t){let n=this.run,r=n.player,i=n.terrain,a=Math.max(this.run.relics.riftFloor(),this.rollTier()),o=this.rollType(),s=i.height(e,t),l=dI(a);this.buildEntrance(e,t,a,o,30,0);','openTear(e,t,pbF=!1){let n=this.run,r=n.player,i=n.terrain,a=Math.max(this.run.relics.riftFloor(),pbF?1:0,this.rollTier()),o=this.rollType(),s=i.height(e,t),l=dI(a);this.buildEntrance(e,t,a,o,30,0,pbF);')
ME=sub(ME,'n.ui.banner(c(`¡Grieta {rar}!`,{rar:lI(a)}),c(`{name}: entra con {key} antes de {s} s`,{name:fI(o),key:Xa(`interact`),s:30}),uI(a))','n.ui.banner(pbF?c(`¡Grieta fusionada {rar}!`,{rar:lI(a)}):c(`¡Grieta {rar}!`,{rar:lI(a)}),c(`{name}: entra con {key} antes de {s} s`,{name:pbF?c(`Grieta fusionada de {type}`,{type:fI(o)}):fI(o),key:Xa(`interact`),s:30}),pbF?`#ffc83a`:uI(a))')
ME=sub(ME,'buildEntrance(e,t,n,r,i,a){','buildEntrance(e,t,n,r,i,a,pbF=!1){')
ME=sub(ME,'this.entrance={x:e,y:o,z:t,tier:n,type:r,life:i,age:a,g:d,mat:u,beacon:f}}','this.entrance={x:e,y:o,z:t,tier:n,type:r,life:i,age:a,g:d,mat:u,beacon:f,fused:pbF}}')
ME=sub(ME,'entrance:e?{x:e.x,z:e.z,tier:e.tier,type:e.type,life:e.life,age:e.age}:null}}','entrance:e?{x:e.x,z:e.z,tier:e.tier,type:e.type,life:e.life,age:e.age,...e.fused?{fused:!0}:{}}:null}}')
ME=sub(ME,'pI.includes(t.type)&&this.buildEntrance(t.x,t.z,t.tier,t.type,t.life,t.age)}','pI.includes(t.type)&&this.buildEntrance(t.x,t.z,t.tier,t.type,t.life,t.age,t.fused===!0)}')
ME=sub(ME,'c(`[E] Entrar en la {name} ({rar}) · {s} s de oleadas y su Alfa`,{name:fI(e.type),rar:lI(e.tier),s:cI[e.tier].secs})','c(`[E] Entrar en la {name} ({rar}) · {s} s de oleadas y su Alfa`,{name:e.fused?c(`Grieta fusionada de {type}`,{type:fI(e.type)}):fI(e.type),rar:lI(e.tier),s:cI[e.tier].secs+(e.fused?33:0)})')
ME=sub(ME,'alphaId:i,phase:`waves`,left:o.secs,','alphaId:i,fused:!!t.fused,phase:`waves`,left:o.secs+(t.fused?33:0),')
ME=sub(ME,'credits:0,alphaLeft:o.alphaTime,','credits:0,alphaLeft:o.alphaTime+(t.fused?30:0),')
ME=sub(ME,'{tier:e.tier,secs:n.alphaSecs+2*r,guard:CF.totem[r]','{tier:e.tier,secs:(n.alphaSecs+2*r)*(e.fused?1.6:1),guard:CF.totem[r]')
ME=sub(ME,'for(let e=0;e<l.chests;e++){let n=e/l.chests*Math.PI*2+.6;','for(let e=0,pbC=a.fused?5:l.chests;e<pbC;e++){let n=e/pbC*Math.PI*2+.6;')
ME=sub(ME,'i.pickups.spawn(`coin`,t,n,r,Math.ceil((4+4*i.stage)*s.gold*(1+.5*a.tier)));for(let e=0;e<l.candy;e++)i.pickups.spawn(`candy`,t,n,r,1);i.relics.offer(a.tier),','i.pickups.spawn(`coin`,t,n,r,Math.ceil((4+4*i.stage)*s.gold*(1+.5*a.tier))*(a.fused?3:1));for(let e=0;e<(a.fused?3:l.candy);e++)i.pickups.spawn(`candy`,t,n,r,1);a.fused?i.relics.offer(Math.min(cI.length-1,a.tier+1),1):i.relics.offer(a.tier),')
ME=sub(ME,'n=`${fI(t.type)} · ${lI(t.tier)}`,r=uI(t.tier),','n=t.fused?`${c(`Grieta fusionada`)} · ${lI(t.tier)}`:`${fI(t.type)} · ${lI(t.tier)}`,r=t.fused?`#ffc83a`:uI(t.tier),')
ME=sub(ME,'frac:1-t.left/e.secs};','frac:1-t.left/(e.secs+(t.fused?33:0))};')
ME=sub(ME,'frac:t.alphaLeft/e.alphaTime};','frac:t.alphaLeft/(e.alphaTime+(t.fused?30:0))};')
ME=sub(ME,'get marker(){let e=this.entrance;return e?{x:e.x,z:e.z,css:uI(e.tier)}:null}','get marker(){let e=this.entrance;return e?{x:e.x,z:e.z,css:e.fused?`#ffc83a`:uI(e.tier)}:null}')
# entrada: X (o mantener C / el botón de Incienso en el móvil) funde 3 Inciensos
MO=sub(MO,'this.state===`play`&&!r&&this.rifts.incenseOn&&t.hit(`KeyC`)&&this.rifts.use();','this.state===`play`&&!r&&this.rifts.incenseOn?t.hit(`KeyX`)&&this.rifts.fuseOn?(this.incHold=0,this.rifts.use(!0)):t.hit(`KeyC`)?this.rifts.canFuse&&O?this.incHold=1e-4:this.rifts.use():this.incHold>0&&(t.down(`KeyC`)?(this.incHold+=e)>=.6&&(this.incHold=0,this.rifts.use(!0)):(this.incHold=0,this.rifts.use())):this.incHold=0;')
open(S+'defineProperty-5g46wf9l-mw3e1u3x.js','w').write(D); open(S+'main-Cx4tF-jA-mw3e1u3x.js','w').write(MO); open(S+'menus-1ZFEe0vd-mw3e1u3x.js','w').write(ME); print('ok')
