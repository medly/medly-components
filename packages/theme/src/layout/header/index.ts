import colors from '../../core/colors';
import { HeaderTheme } from './types';

const header: HeaderTheme = {
    backgroundColor: colors.professionalNavy,
    maxContentWidth: '1240px',
    height: '72px',
    fontColor: colors.white,
    breakpoints: {
        mobile: '375px',
        tablet: '720px',
        desktop: '960px'
    },
    nav: {
        gutterSpace: '0.8rem'
    },
    navItem: {
        fontColor: colors.white,
        activeColor: colors.blue[600],
        hoverColor: colors.blue[700],
        activeIndicatorColor: colors.medlyGreen[500],
        height: {
            mobile: '48px',
            desktop: '56px'
        }
    }
};

export default header;
