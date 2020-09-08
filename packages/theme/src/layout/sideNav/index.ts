import colors from '../../core/colors';
import { SideNavTheme } from './types';

const sideNav: SideNavTheme = {
    closeSize: '7.2rem',
    openSize: '25.6rem',
    bgColor: colors.white,
    scrollBarColor: colors.grey[500],
    separatorColor: colors.grey[200],
    group: {
        title: {
            color: colors.grey[500],
            textVariant: 'h5'
        }
    },
    navItem: {
        minHeight: '4.8rem',
        borderRadius: '0.4rem',
        bgColor: {
            default: 'transparent',
            hovered: colors.grey[100],
            pressed: colors.grey[200],
            active: colors.blue[100]
        },
        icon: {
            size: 'S',
            color: {
                default: colors.grey[600],
                hovered: colors.grey[900],
                pressed: colors.black,
                active: colors.blue[500]
            }
        },
        text: {
            textVariant: 'body2',
            color: {
                default: colors.grey[600],
                hovered: colors.grey[900],
                pressed: colors.black,
                active: colors.blue[500]
            }
        }
    }
};

export default sideNav;
