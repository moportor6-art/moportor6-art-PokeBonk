import { Init } from './js/init/Init.js';
import { loadData } from './js/file/data.js';

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('dragstart', event => event.preventDefault());
    const data = loadData();
    new Init(data);
});

