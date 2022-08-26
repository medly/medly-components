import { BreakpointsTheme } from '@medly-components/theme';

export type StyledNextPrevBtnProps = {
    disabled?: boolean;
    top?: string;
};

export type CarouselStyledProps = {
    itemsCount?: {
        [k in keyof BreakpointsTheme]: number;
    };
    arrowPositionFromTop?: string;
};

export type CarouselProps = CarouselStyledProps & {
    withVariableWidth?: boolean;
};
