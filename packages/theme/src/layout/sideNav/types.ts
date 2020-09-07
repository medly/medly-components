import { FontVariants } from '../../core/types';
import { IconSizes } from '../../icon/types';

export interface SideNavTheme {
    closeSize: string;
    openSize: string;
    bgColor: string;
    separatorColor: string;
    scrollBarColor: string;
    navItem: {
        icon: {
            size: IconSizes;
            color: {
                default: string;
                hovered: string;
                pressed: string;
                active: string;
            };
        };
        text: {
            fontVariant: FontVariants;
            color: {
                default: string;
                hovered: string;
                pressed: string;
                active: string;
            };
        };
        bgColor: {
            default: string;
            hovered: string;
            pressed: string;
            active: string;
        };
        minHeight: string;
        borderRadius: string;
    };
}
