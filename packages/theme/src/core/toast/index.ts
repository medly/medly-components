import colors from '../colors';
import { ToastTheme } from './types';

const toast: ToastTheme = {
    textColor: colors.professionalNavy,
    boxShadow: colors.grey[400],
    bgColor: {
        success: colors.green[200],
        info: colors.communityBlue[200],
        warning: colors.sunshineYellow[200],
        error: colors.red[200]
    },
    fillColor: {
        success: colors.green[500],
        info: colors.communityBlue[500],
        warning: colors.sunshineYellow[500],
        error: colors.red[500]
    }
};

export default toast;
