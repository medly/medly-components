import { HTMLProps, WithThemeProp } from '@core-utils/types';
import { FontSizeTheme, FontWeightTheme } from '@medly-components/theme';

interface Common extends HTMLProps<HTMLElement>, WithThemeProp {
    textColor?: string;
    uppercase?: boolean;
    lineThrough?: boolean;
}

export interface Props extends Common {
    textSize?: keyof FontSizeTheme;
    textWeight?: keyof FontWeightTheme;
}

export interface StyledProps extends Common {
    textSize?: string;
    textWeight?: string;
}
