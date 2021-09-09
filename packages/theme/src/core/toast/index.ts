import colors from '../colors';
import { ToastTheme } from './types';

const toast: ToastTheme = {
    textColor: colors.grey[900],
    boxShadow: colors.grey[400],
    bgColor: {
        success: colors.green[100],
        info: colors.blue[100],
        warning: colors.yellow[200],
        error: colors.red[100]
    },
    fillColor: {
        success: colors.green[500],
        info: colors.blue[500],
        warning: colors.yellow[500],
        error: colors.red[500]
    },
    icon: {
        align: 'normal'
    }
};

export default toast;
