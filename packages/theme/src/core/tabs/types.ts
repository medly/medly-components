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
    label: {
        fontVariant: {
            S: FontVariants;
            M: FontVariants;
            L: FontVariants;
        };
    };
    /** For use with the `solid` Tabs variant */
    solid: {
        tabBorderRadius: string;
        tabList: {
            color: string;
            borderRadius: string;
            padding: {
                S: string;
                M: string;
                L: string;
            };
        };
        disabledLabel: {
            fontVariant: {
                S: FontVariants;
                M: FontVariants;
                L: FontVariants;
            };
        };
    };
}
