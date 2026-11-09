export function damageCalculator(move, user, foe, crt) {
    // Base 
    let damage = 0;
    Object.entries(move.power).forEach(([stat, factor]) => {
        if (stat == 'hp') damage += Math.floor(user.hp[1] * factor);
        else damage += (user.stats[stat] + user.boost[stat]) * factor;
    });

    // Critical
    if (crt) damage +=  Math.floor(damage * (user.stats['crtDmg'] + user.boost['crtDmg']) / 100);   

    // Booster
    if (move.booster) damage += moveBooster(move.booster, user, foe, damage, crt);

    // Variacion 
    const variation = 0.9 + Math.random() * 0.2;
    damage = Math.round(damage * variation);

    // Reduccion
    let res = foe.stats['res'] + foe.boost['res'];
    if (res > 50) res = 50;
    const reduction = Math.round(damage * (res / 100));
    damage = Math.round(damage - reduction);

    // Fear
    if (foe.status['fear']) {
        let fear = 0;
        if (crt) fear = Math.ceil(damage * foe.status['fear'] / 33);
        else fear = Math.ceil(damage * foe.status['fear'] / 100);
        damage += fear;
    }

    // flaqueza
    if (foe.status['frailty']) foe.damageFrailty();

    if (damage < 0) damage = 0;

    return damage;
}

export function healCalculator(move, user) {
    // Base 
    let heal = 0;
    Object.entries(move.heal).forEach(([stat, factor]) => {
        if (stat == 'hp') heal += Math.floor(user.hp[1] * factor);
        else heal += (user.stats[stat] + user.boost[stat]) * factor;
    });

    return Math.ceil(heal);
}

export function criticalCalculator(user) {
    let crt = Math.floor(Math.random() * 100) + 1;
    if ((user.stats['crt'] + user.boost['crt']) > crt) return true;
    return false;
}

export function moveBooster(booster, user, foe, damage) {
    const target = (booster.target == 'user') ? user : foe;
    let damageBosted = 0;

    switch (booster.type) {
        case 'discharge':
            if (target.status['charge'] > 0) {
                damageBosted = Math.ceil(damage * ((target.status['charge'] * booster.value))/100)
                target.loseCharges(target.status['charge']);
            } 
            break;
    }

    return damageBosted;
}

export function moveEffect(effect, user, foe, dmg, crt) {
    if (effect.condition == 'critical' && !crt) return;
    const stats = ['atk', 'spa', 'spe'];
    const target = (effect.target == 'user') ? user : foe;
    let n;
    let statBuff;
    let statsDebuff;
    switch (effect.type) {
        case 'boost':
            if (foe.hp[0] <= 0) return;
            target.applyBoost(effect.value, effect.percent);
            break;
        case 'earnGold':
            let gold = Math.floor(Math.random() * effect.value.max) + effect.value.min;
            target.changeGold(gold);
            break;
        case 'changeAP':
            if (foe.hp[0] <= 0) return;
            let ap = effect.value[Math.floor(Math.random() * effect.value.length)];
            target.changeAP(ap, true);
            break;
        case 'changeMP':
            if (foe.hp[0] <= 0) return;
            let mp = effect.value[Math.floor(Math.random() * effect.value.length)];
            target.changeMP(mp, true);
            break;
        case 'restoreHP':
            let heal = Math.floor(dmg * effect.value);
            target.getHealed(heal);
            break;
        case 'purify':
            if (!foe.status['poison']) return;
            user.getHealed(foe.status['poison']);
            foe.retireAllPoison();
            break;
        case 'purifyUp':
            if (!foe.status['poison']) return;
            user.getHealed(foe.status['poison']*2);
            foe.retireAllPoison();
            break;
        case 'applyPoison':
            if (!foe.status['poison']) return;
            target.damagePoison();
            break;
        case 'toxic':
            if (!foe.status['poison']) return;
            target.applyPoison(foe.status['poison']);
            break;
        case 'jawLock':
            if (foe.hp[0] == 0) {
                n = Math.floor(Math.random() * 3);
                statBuff = stats[n]; 
                user.jawLock(statBuff, effect.value);
            }
            break;
        case 'meanLook':
            if (foe.hp[0] <= 0) return;
            const values = [[10], [-5], [-5]];
            const shuffledStats = shuffleArray(stats);
            
            const result = shuffledStats.reduce((acc, key, i) => {
                acc[key] = values[i];
                return acc;
            }, {});
            target.applyBoost(result);
            break;
        case 'meanLookUp':
            if (foe.hp[0] <= 0) return;
            const valuesUp = [[15], [-5], [-5]];
            const shuffledStatsUp = shuffleArray(stats);
            
            const resultUp = shuffledStatsUp.reduce((acc, key, i) => {
                acc[key] = valuesUp[i];
                return acc;
            }, {});
            target.applyBoost(resultUp);
            break;
    }
}

export function moveStatus(status, user, foe) {
    const target = (status.target == 'user') ? user : foe;
    switch (status.type) {
        case 'charge':
            target.applyCharge(status.value);
            break;
        case 'wet':
            target.applyWet(status.value);
            break;
        case 'elusion':
            target.applyElusion(status.value);
            break;
        case 'poison':
            target.applyPoison(status.value);
            break;
        case 'burn':
            target.applyBurn(status.value);
            break;
        case 'erosion':
            target.applyErosion(status.value);
            break;
        case 'restoration':
            target.applyRestoration(status.value);
            break;
        case 'fear':
            target.applyFear(status.value);
            break;
        case 'frailty':
            target.applyFrailty(status.value);
            break;
    }
}

function shuffleArray(array) {
  const arr = [...array]; // copiamos para no modificar el original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // índice aleatorio
    [arr[i], arr[j]] = [arr[j], arr[i]]; // intercambiar elementos
  }
  return arr;
}