import { tags, tooltipTags } from '../game/data/tagsData.js';

export class Utility {
	numberDot(num, lang = 0) {
		if ([0, 6, 7].includes(lang)) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		else if (lang === 2) return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		else return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	formatGold(amount, lang = 0) {
		if (amount >= 99999999999) return amount.toExponential(2);
		return this.numberDot(amount, lang);
	}

	minutsToTime(min) {
		const h = Math.floor(min/60)
		const m = min - (h*60);
		return `${h}:${m.toString().padStart(2, '0')}`;
	}

	isBetweenHours(start, end) {
	    const now = new Date();
	    const hour = now.getHours();
	    return hour >= start && hour < end;
	}

	colorTier(tier) {
		switch (tier) {
			case 'pokemon': return 'var(--tierPokemon)';
			case 'common': return 'var(--tierCommon)';
			case 'uncommon': return 'var(--tierUncommon)';
			case 'luxury': return 'var(--tierLuxury)';
			case 'epic': return 'var(--tierEpic)';
			case 'legendary': return 'var(--tierLegendary)';
			case 'mega': return 'var(--tierMega)';
			case 'admin': return 'var(--tierAdmin)';

			default: return '#111';
		}
	}

	drawStarEmoji(theme) {
		if (theme === 3) return "🎃";
		return "⭐";
	}

	darkenColor(color, amount = 0.25) {
		if (!color) return color;

		if (color.startsWith('var(')) {
			const variable = color.match(/var\((--[^)]+)\)/)?.[1];

			if (variable) {
				color = getComputedStyle(document.documentElement)
					.getPropertyValue(variable)
					.trim();
			}
		}

		if (!color.startsWith('#')) return color;

		let hex = color.slice(1);

		if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
	
		const r = Math.max(0, Math.floor(parseInt(hex.slice(0, 2), 16) * (1 - amount)));
		const g = Math.max(0, Math.floor(parseInt(hex.slice(2, 4), 16) * (1 - amount)));
		const b = Math.max(0, Math.floor(parseInt(hex.slice(4, 6), 16) * (1 - amount)));

		return `rgb(${r}, ${g}, ${b})`;
	}

	parseText(text) {
	    let result = String(text || '')
	        .replace(/&/g, '&amp;')
	        .replace(/</g, '&lt;')
	        .replace(/>/g, '&gt;')
	        .replace(/"/g, '&quot;')
	        .replace(/'/g, '&#039;');

	    result = result.replace(
			/\[SHAKE\]([\s\S]*?)\[\/SHAKE\]/gi,
			(match, content) => {
				let charIndex = 0;

				const words = content.split(/(\s+)/).map(part => {
					if (/^\s+$/.test(part)) {
						return part;
					}

					const letters = [...part].map(char => {
						const html = `<span class="dex-tutorial-shake-letter" style="--shake-delay: ${charIndex * 0.04}s">${char}</span>`;
						charIndex++;
						return html;
					}).join('');

					return `<span class="dex-tutorial-shake-word">${letters}</span>`;
				}).join('');

				return `<span class="dex-tutorial-shake">${words}</span>`;
			}
		);

	    result = result.replace(/\[REVERSE\](.*?)\[\/REVERSE\]/g, (_, content) => {
			return `<span class="dex-tutorial-reverse">${content}</span>`;
		});

	    result = result.replace(
		    /\[([A-ZÁÉÍÓÚÜÑ]+)\]([\s\S]*?)\[\/\1\]/gi,
		    (match, tag, content) => {
		        const upperTag = tag.toUpperCase();
		        const className = tags[upperTag];

		        if (!className) {
		            return content;
		        }

		        const tooltipId = tooltipTags[upperTag];

		        const tooltipClass = tooltipId
		            ? ` display-tooltip-${tooltipId}`
		            : '';

		        return `<span class="${className}${tooltipClass}">${content}</span>`;
		    }
		);

	    return result
	        .trim()
	        .split(/\r?\n/)
	        .map(line => {
	            line = line.trim();

	            if (!line) {
	                return '<div class="dex-tutorial-line dex-tutorial-empty"></div>';
	            }

	            return `<div class="dex-tutorial-line">${line}</div>`;
	        })
	        .join('');
	}

	chrono(speed = 1, shouldRun = () => true) {
	    let centesimas = 0;
	    let intervalId = null;

	    function showTime() {
	        const totalSegundos = Math.floor(centesimas / 100);

	        const horas = Math.floor(totalSegundos / 3600);
	        const minutos = Math.floor((totalSegundos % 3600) / 60);
	        const segundos = totalSegundos % 60;
	        const cs = centesimas % 100;

	        const el = document.getElementById('ui-chrono');
	        if (el) {
	            el.innerText =
	                `${horas.toString().padStart(2, '0')}:` +
	                `${minutos.toString().padStart(2, '0')}:` +
	                `${segundos.toString().padStart(2, '0')}.` +
	                cs.toString().padStart(2, '0');
	        }
	    }

	    function tick() {
	        if (shouldRun()) {
	            centesimas++;
	            showTime();
	        }
	    }

	    function startInterval() {
	        if (intervalId) return;
	        intervalId = setInterval(tick, 10 / speed);
	    }

	    return {
	        start() {
	            if (!intervalId) startInterval();
	        },

	        stop() {
	            if (!intervalId) return;
	            clearInterval(intervalId);
	            intervalId = null;
	        },

	        restart() {
	            this.stop();
	            centesimas = 0;
	            showTime();
	        },

	        speedChange(newSpeed) {
	            speed = newSpeed;
	            if (intervalId) {
	                this.stop();
	                this.start();
	            }
	        },

	        getCentesimas() {
	            return centesimas;
	        }
	    };
	}
}
