import colors from '../colors';
import { DrawerTheme } from './types';

const modal: DrawerTheme = {
    overlayColor: 'rgba(67, 84, 101, 0.65)',
    closeIcon: {
        borderRadius: '50%',
        color: {
            default: colors.grey[600],
            hovered: colors.grey[600],
            pressed: colors.grey[800]
        },
        bgColor: {
            default: colors.white,
            hovered: colors.grey[100],
            pressed: colors.grey[200]
        }
    }
};

export default modal;
