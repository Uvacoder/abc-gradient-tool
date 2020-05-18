import { hexToRGB, isDark, getColorwheel } from './colorUtils';

class Color {
    constructor(hex, stop, selected, index) {
        this.hex = hex;
        this.stop = stop;
        this.selected = selected;
        this.index = index;
    }

    getRGB = function (primary) {
        return hexToRGB(this.hex, primary);
    };

    isDark = function () {
        return isDark(this.hex);
    };

    getColorwheel = function () {
        return getColorwheel(this.hex);
    };
}

export { Color };
