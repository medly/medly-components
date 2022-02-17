import { FontVariants, Theme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';

export type BoxProps = Omit<HTMLProps<HTMLDivElement>, 'size'> & { theme?: Theme } & {
    /** To render Box component as any component */
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
    /** To specify the color of the text inside a component */
    color?: string;
    /** To specify the width of the component */
    width?: string;
    /** To specify the height of the component */
    height?: string;
    /** To specify the border color the borderWidth is required */
    borderColor?: string;
    /** To specify the border width the borderColor is required */
    borderWidth?: number;
    /** To change the border-radius */
    borderRadius?: number;
    /** To specify the display type of component */
    display?: 'flex' | 'block' | 'none' | 'inline-flex' | 'inline-block' | 'table' | 'table-row' | 'list-item' | 'initial';
    /** Set it true to show loading state */
    isLoading?: boolean;
    /** Set font variant for text inside a component */
    fontVariant?: FontVariants;
    /** Set shadow for the box component */
    shadowSize?: 'S' | 'M' | 'L' | 'XL';
    /** Set shadow color for the box component */
    shadowColor?: string;
};
