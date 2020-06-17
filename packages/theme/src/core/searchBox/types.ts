export type SearchBoxSizes = 'S' | 'M';

export type SearchBoxTheme = {
    sizes: {
        [k in SearchBoxSizes]: {
            height: string;
            iconPosition: string;
        };
    };
    bgColor: string;
    textColor: string;
    placeholderTextColor: string;
    borderColor: string;
    iconColor: string;
    iconBg: string;
    iconActiveColor: string;
    iconActiveBg: string;
    hover: {
        borderColor: string;
        boxShadow: string;
    };
    active: {
        borderColor: string;
        boxShadow: string;
        placeholderTextColor: string;
        iconColor: string;
    };
    options: {
        boxShadow: string;
    };
};
