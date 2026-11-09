import { playSound } from '../file/audio.js';

export class Tooltip {
    constructor(lang = 0) {
        this.lang = lang;

        this.tooltip = document.createElement("div");
        this.tooltip.className = "tooltip";

        document.body.appendChild(this.tooltip);

        document.addEventListener("mousemove", (e) => {
            const tooltipRect = this.tooltip.getBoundingClientRect();
            const offset = 15;
            let left = e.pageX + offset;
            let top = e.pageY + offset;

            if (left + tooltipRect.width > window.innerWidth) {
                left = e.pageX - tooltipRect.width - offset/10;
            }

            if (top + tooltipRect.height > window.innerHeight + window.scrollY) {
                top = e.pageY - tooltipRect.height - offset;
            }

            this.tooltip.style.left = left + "px";
            this.tooltip.style.top = top + "px";
        });
    }

    bindToElement(element, item) {
        element.addEventListener("mouseenter", () => {
            this.showItem(item);
        });

        element.addEventListener("mouseleave", () => {
            this.hide();
        });
    }

    bindToAchievement(element, achievement) {
        element.addEventListener("mouseenter", () => {
            this.showAchievement(achievement);
        });

        element.addEventListener("mouseleave", () => {
            this.hide();
        });
    }

    showItem(item) {
        playSound('hover4', 'ui')
        const name = item.name[this.lang];
        const desc = item.description[this.lang];

        this.tooltip.innerHTML = `
            <div class="tooltip-content">
                <span class="tooltip-name">${name}</span><br>
                <span class="tooltip-description">${desc}</span>
            </div>
        `;
        this.tooltip.style.display = "block";
    }

    showAchievement(achievement) {
        playSound('hover4', 'ui')
        const desc = achievement.description[this.lang];

        this.tooltip.innerHTML = `
            <div class="tooltip-content">
                <span class="tooltip-achievement">${desc}</span>  
            </div>
        `;
        this.tooltip.style.display = "block";
    }

    hide() {
        this.tooltip.style.display = "none";
    }
}
