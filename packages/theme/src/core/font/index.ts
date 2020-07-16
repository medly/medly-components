import colors from '../colors';
import faces from './faces';
import { FontTheme } from './types';
import variants from './variants';
import weights from './weights';

const font: FontTheme = {
    variants,
    weights,
    faces,
    defaults: {
        color: colors.black,
        variant: 'body2',
        fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
    }
};

export default font;
