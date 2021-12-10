import { FontVariants, Theme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

export type BoxProps = Omit<HTMLProps<HTMLDivElement>, 'size'> & { theme?: Theme } & {
    /** To be used to render Box component as any component */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
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
    /** To be used to specify border color, borderWidth is also required for this */
    borderColor?: string;
    /** To be used to specify border width, borderColor is also required for this */
    borderWidth?: number;
    /** To be used to change border-radius */
    borderRadius?: number;
    /** To be used to specify the display type of component */
    display?: 'flex' | 'block' | 'none' | 'inline-flex' | 'inline-block' | 'table' | 'table-row' | 'list-item' | 'initial';
    /** Set it true to show loading state */
    isLoading?: boolean;
    /** Set font variant for text inside component */
    fontVariant?: FontVariants;
    /** Set shadow for the box component */
    shadowSize?: 'S' | 'M' | 'L' | 'XL';
    /** Set shadow color for the box component */
    shadowColor?: string;
};
