import colors from '../colors';
import { DrawerTheme } from './types';

const modal: DrawerTheme = {
    overlayColor: 'rgba(67, 84, 101, 0.65)',
    closeIcon: {
        borderRadius: '50%',
        color: {
            default: colors.black,
            hovered: colors.black,
            pressed: colors.black
        },
        bgColor: {
            default: colors.white,
            hovered: colors.grey[100],
            pressed: colors.grey[100]
        }
    }
};

export default modal;
