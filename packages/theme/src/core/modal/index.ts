import colors from '../colors';
import { ModalTheme } from './types';

const modal: ModalTheme = {
    overlayColor: 'rgba(67, 84, 101, 0.65)',
    shadowColor: 'rgba(67, 84, 101, 0.5)',
    headerColor: colors.black,
    backgroundColor: colors.white,
    scrollbarThumbColor: colors.grey[400],
    borderRadius: '2.4rem',
    closeIcon: {
        borderRadius: '50%',
        color: {
            default: colors.black,
            hovered: colors.white,
            pressed: colors.white
        },
        bgColor: {
            default: colors.grey[100],
            hovered: colors.blue[600],
            pressed: colors.blue[700]
        }
    }
};

export default modal;
