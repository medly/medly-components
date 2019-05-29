import { IconSizesType } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface SpanProps extends WithThemeProp {
    size?: IconSizesType;
    color?: string;
}

export interface BurgerIconStyledProps extends SpanProps {
    open?: boolean;
}

export interface BurgerIconProps {
    size?: IconSizesType;
    color?: string;
    onClick?: (open: boolean) => void;
}
