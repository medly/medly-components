import { FontVariants } from '../../core/types';
import { IconSizes } from '../../icon/types';

export interface SideNavTheme {
    closeSize: string;
    openSize: string;
    navItemMinHeight: string;
    fontVariant: FontVariants;
    bgColor: string;
    iconSize: IconSizes;
    separatorColor: string;
    scrollBarColor: string;
    navItemColors: {
        active: {
            textColor: string;
            bgColor: string;
        };
        hover: {
            textColor: string;
            bgColor: string;
        };
        default: {
            textColor: string;
            bgColor: string;
        };
    };
}
