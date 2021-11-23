import { FontVariants, Theme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

export type BoxProps = Omit<HTMLProps<HTMLDivElement>, 'size'> & { theme?: Theme } & {
    /** Padding along x-axis */
    px?: number;
    /** Padding along y-axis */
    py?: number;
    /** Margin along x-axis */
    mx?: number;
    /** Margin along y-axis */
    my?: number;
    /** Background color */
    bg?: string;
    /** To be used to specify color of the text inside component */
    color?: string;
    /** To be used to specify width of the component */
    width?: string;
    /** To be used to specify height of the component */
    height?: string;
    /** To be used to specify border color */
    borderColor?: string;
    /** To be used to specify border width */
    borderWidth?: number;
    /** To be used to specify the display type of component */
    display?: string;
    /** To be used to change border-radius */
    borderRadius?: number;
    /** Set it true to show loading state */
    isLoading?: boolean;
    /** Set font variant for text inside component */
    fontVariant?: FontVariants;
};
