export interface ToastTheme {
    textColor: string;
    boxShadow: string;
    bgColor: {
        success: string;
        info: string;
        warning: string;
        error: string;
    };
    fillColor: {
        success: string;
        info: string;
        warning: string;
        error: string;
    };
    boxBgColor?: {
        success: string;
        info: string;
        warning: string;
        error: string;
    };
    icon: {
        align: 'center' | 'normal';
    };
}
