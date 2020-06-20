export type SearchBoxSizes = 'S' | 'M';

export type SearchBoxTheme = {
    sizes: {
        [k in SearchBoxSizes]: {
            height: string;
            iconPosition: string;
        };
    };
    default: {
        bgColor: string;
        textColor: string;
        iconColor: string;
        iconBg: string;
        placeholderTextColor: string;
        borderColor: string;
    };
    hover: {
        borderColor: string;
        boxShadow: string;
    };
    active: {
        borderColor: string;
        boxShadow: string;
        placeholderTextColor: string;
        iconColor: string;
        iconBg: string;    
    };
    options: {
        boxShadow: string;
    };
};
