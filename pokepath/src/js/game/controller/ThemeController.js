const UI_THEMES = [
    'original',
    'classic',
    'monochrome',
    'halloween',
];

export function applyUITheme(theme) {
    if (!UI_THEMES.includes(theme)) {
        theme = 'original';
    }

    document.documentElement.dataset.theme = theme;
}

export function getUIThemeName(index) {
    return UI_THEMES[index] ?? UI_THEMES[0];
}

export { UI_THEMES };