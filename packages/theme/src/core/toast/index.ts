import colors from '../colors';
import { ToastTheme } from './types';

const toast: ToastTheme = {
    textColor: colors.professionalNavy,
    boxShadow: colors.grey[400],
    iconBg: colors.grey[100],
    bgColor: {
        success: colors.green[100],
        info: colors.communityBlue[100],
        warning: colors.sunshineYellow[200],
        error: colors.red[100]
    },
    fillColor: {
        success: colors.green[500],
        info: colors.communityBlue[500],
        warning: colors.sunshineYellow[500],
        error: colors.red[500]
    }
};

export default toast;
