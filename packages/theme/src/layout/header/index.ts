import colors from '../../core/colors';
import { HeaderTheme } from './types';

const header: HeaderTheme = {
    backgroundColor: colors.professionalNavy,
    maxContentWidth: '1240px',
    height: {
        mobile: '64px',
        desktop: '72px'
    },
    nav: {
        gutterSpace: '0.8rem'
    },
    navItem: {
        textColor: { active: colors.medlyGreen[500], default: colors.white, hovered: colors.white, pressed: colors.white },
        bgColor: { active: 'transparent', default: 'transparent', hovered: colors.everGreen[500], pressed: colors.everGreen[600] },
        activeIndicatorColor: colors.medlyGreen[500],
        height: {
            mobile: '48px',
            desktop: '56px'
        }
    }
};

export default header;
