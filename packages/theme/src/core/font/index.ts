import colors from '../colors';
import faces from './faces';
import sizes from './sizes';
import { FontTheme } from './types';
import weights from './weights';

const font: FontTheme = {
    sizes,
    weights,
    faces,
    defaultFontFamily: 'ProximaNova, Helvetica Neue, Helvetica, Arial, sans-serif',
    defaultColor: colors.black
};

export default font;
