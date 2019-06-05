import { IconSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface SpanProps extends WithThemeProp {
    size?: IconSizes;
    color?: string;
}

export interface BurgerIconStyledProps extends SpanProps {
    open?: boolean;
}

export interface BurgerIconProps {
    size?: IconSizes;
    color?: string;
    onClick?: (open: boolean) => void;
}
