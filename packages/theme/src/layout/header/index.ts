import colors from '../../core/colors';
import { HeaderTheme } from './types';

const header: HeaderTheme = {
    backgroundColor: colors.professionalNavy,
    maxContentWidth: '1240px',
    height: '72px',
    fontColor: colors.white,
    navItem: {
        fontColor: colors.white,
        activeColor: colors.blue[600],
        hoverColor: colors.blue[700],
        activeIndicatorColor: colors.medlyGreen[500]
    }
};

export default header;
