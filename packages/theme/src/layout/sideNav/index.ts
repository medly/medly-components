import colors from '../../core/colors';
import { SideNavTheme } from './types';

const sideNav: SideNavTheme = {
    closeSize: '7.2rem',
    openSize: '25.6rem',
    iconSize: 'M',
    fontVariant: 'body1',
    navItemMinHeight: '4.8rem',
    bgColor: colors.white,
    scrollBarColor: colors.grey[500],
    separatorColor: colors.grey[200],
    navItemColors: {
        active: {
            textColor: colors.blue[500],
            bgColor: 'rgba(0, 90, 238, 0.1)'
        },
        hover: {
            textColor: colors.grey[800],
            bgColor: colors.grey[100]
        },
        default: {
            textColor: colors.grey[600],
            bgColor: colors.white
        }
    }
};

export default sideNav;
