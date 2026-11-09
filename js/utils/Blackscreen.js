export class Blackscreen {
    constructor(scene) {
        this.scene = scene;
        this.background = this.create();
    }

    create = () => {
        const background = document.createElement('div');

        background.style.position = 'absolute'; // antes: fixed
        background.style.top = '0';
        background.style.left = '0';
        background.style.height = '100%';
        background.style.width = '100%';
        background.style.background = 'rgba(0, 0, 0, 0.6)';
        background.style.zIndex = 98; // debajo de la ventana

        // insertar en el mismo contenedor que la ventana
        document.getElementById('screen-root').appendChild(background);

        // MUY IMPORTANTE: no mover la ventana dentro
        // background.appendChild(this.scene);  ← eliminado

        return background;
    }

    destroy = () => {
        if (this.background && this.background.parentNode) {
            this.background.parentNode.removeChild(this.background);
        }
    }
}
