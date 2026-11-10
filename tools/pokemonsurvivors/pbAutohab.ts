// Subversión propia de PokéBonk Remaster: "Auto aprender" para Pokémon Survivors.
// Si está activado (botón en la pausa, o el mismo ajuste de PokéBonk: localStorage 'pb-autohab'), al subir de
// nivel se elige sola la mejor carta para tu Pokémon: evoluciones y fusiones primero, movimientos de su tipo,
// mejorar los que llevas repartiendo niveles, objetos útiles (Cinta Fuerte, Garra Rápida, Dado Trucado...) y los
// de su tipo o de sus movimientos; la Baya solo si vas mal de vida. En otros tipos de elección decide el jugador.
import type { Game, Offer, Player } from './game/types'
import { MOVES } from './game/moves'
import { ITEMS } from './data/items'
import { formOf } from './game/branch'

export const pbAutoOn = (): boolean => {
  try { return localStorage.getItem('pb-autohab') === '1' } catch { return false }
}

const ITEM_W: Record<string, number> = {
  muscleBand: 80, quickClaw: 78, loadedDice: 72, wideLens: 55, metronome: 45, assaultVest: 45, lightClay: 40,
  leftovers: 38, luckyEgg: 35, choiceScarf: 30, kingsRock: 30, powerHerb: 30, dowsingMachine: 25, toxicOrb: 25,
}

export function pbAutoPick(g: Game, me: Player): Offer | null {
  const offers = (me as any).offers as Offer[]
  if (!offers || !offers.length) return null
  let types: readonly string[] = []
  try { types = formOf(g, me).types } catch { /* sin forma */ }
  const M = MOVES as any
  const I = ITEMS as any
  const moveTypes = new Set<string>(me.moves.map((m) => M[m.id]?.type).filter(Boolean))
  const vida = me.hp / Math.max(1, (me as any).stats?.maxHp ?? 100)
  const rara = (o: any) => (o.rarity === 'shiny' ? 25 : o.rarity === 'rare' ? 15 : 0)
  let best: Offer | null = null
  let max = -Infinity
  for (const o of offers as any[]) {
    let s: number
    switch (o.kind) {
      case 'evolution':
      case 'duo':
        s = 200
        break
      case 'branch':
        s = 100 - o.branch
        break
      case 'move': {
        const owned = me.moves.find((m) => m.id === o.id)
        const stab = types.includes(M[o.id]?.type) ? 1 : 0
        s = owned ? 70 - owned.level * 3 + stab * 10 : 90 + stab * 20
        s += rara(o)
        break
      }
      case 'item': {
        const def = I[o.id]
        const owned = me.items.find((it) => it.id === o.id)
        s = def?.boosts ? (types.includes(def.boosts) || moveTypes.has(def.boosts) ? 70 : 15) : (ITEM_W[o.id] ?? 30)
        s += rara(o) - (owned ? owned.level * 2 : 0)
        break
      }
      case 'berry':
        s = 5 + (1 - vida) * 150
        break
      default:
        return null
    }
    if (s > max) { max = s; best = o }
  }
  return best
}
