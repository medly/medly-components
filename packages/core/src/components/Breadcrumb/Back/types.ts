import { HTMLProps } from '@medly-components/utils';

export type BreadcrumbBackProps = HTMLProps<HTMLLIElement> & {
    /** Use to render any component as Button */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Use for rendering like Link */
    to?: string | number;
};
