import { FontVariants } from '../../core/types';
import { IconSizes } from '../../icon/types';

export interface SideNavTheme {
    closeSize: string;
    openSize: string;
    bgColor: string;
    separatorColor: string;
    scrollBarColor: string;
    group: {
        title: {
            color: string;
            textVariant: FontVariants;
        };
    };
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
            textVariant: FontVariants;
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
