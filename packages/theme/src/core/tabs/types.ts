import { FontVariants } from '../font/types';

type Colors = {
    active?: string;
    default?: string;
    hovered?: string;
    disabled?: string;
};
export interface TabsTheme {
    countColor: string;
    borderColor: {
        active: string;
        closed: string;
        open: string;
        hovered: string;
    };
    labelColor: Colors;
    helperTextColor: Colors;
    iconColor: Colors;
    iconBgColor: Colors;
    countBgColor: Colors;
    bgColor: Colors;
    countBorderRadius: string;
    slider: {
        color: string;
        borderRadius: string;
    };
    tabList: {
        color: string;
        borderRadius: string;
    };
    label: {
        fontVariant: {
            S: FontVariants;
            M: FontVariants;
            L: FontVariants;
        };
    };
    disabledLabel: {
        fontVariant: {
            S: FontVariants;
            M: FontVariants;
            L: FontVariants;
        };
    };
}
