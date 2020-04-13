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
    /** Icon size */
    size?: IconSizes;
    /** Icon color */
    color?: string;
    /** Prop to decide its open state */
    open?: boolean;
    /** Function to be called on click on it */
    onClick?: () => void;
}
