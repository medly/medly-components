import colors from '../colors';
import { ModalTheme } from './types';

const modal: ModalTheme = {
    overlayColor: 'rgba(67, 84, 101, 0.65)',
    shadowColor: 'rgba(67, 84, 101, 0.5)',
    headerColor: colors.black,
    backgroundColor: colors.white,
    scrollbarThumbColor: colors.grey[400],
    borderRadius: '1.2rem',
    closeIcon: {
        borderRadius: '50%',
        border: 'none',
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
    },
    padding: {
        header: {
            desktop: '3.2rem 5.6rem 1.6rem 3.2rem',
            mobile: '1.6rem 5.6rem 1.6rem 1.6rem'
        },
        content: {
            desktop: '0.8rem 3.2rem 2.4rem',
            mobile: '0.8rem 1.6rem 2.4rem'
        },
        actions: {
            desktop: '1.6rem 3.2rem 3.2rem',
            mobile: '1.6rem'
        }
    }
};

export default modal;
