import { Sprite } from '../../utils/Sprite.js';

export class Piece extends Sprite {
    constructor(main, x, y, ctx, pokemon, tile) {
        super(
            x,
            y,
            ctx,
            pokemon.sprite.image,
            pokemon.sprite.frames,
            8,
            4,
            pokemon.sprite.hold
        );

        this.main = main;
        this.pokemon = pokemon;
        this.tile = tile;

        this.active = false;
        this.tower = null;

        this.chessPiece = true;
    }

    setActive(active) {
        if (this.active === active) return;
        this.active = active;
    }

    draw() {
        if (!this.ctx || !this.loaded || !this.sprite) return;

        const ctx = this.ctx;

        const frameWidth = this.width;
        const frameHeight = this.height;

        const frameX = this.frames.current * frameWidth;
        const frameY = this.frames.direction * frameHeight;

        const tileCenterX = this.position.x + 12;
        const tileCenterY = this.position.y + 12;

        ctx.save();

        if (!this.active) {
            ctx.filter = 'grayscale(1)';
        }

        ctx.drawImage(
            this.sprite,
            frameX,
            frameY,
            frameWidth,
            frameHeight,
            tileCenterX - frameWidth / 2,
            tileCenterY - frameHeight / 2,
            frameWidth,
            frameHeight
        );

        ctx.restore();
    }
}