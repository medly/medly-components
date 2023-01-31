import { HTMLProps } from '@medly-components/utils';

export type BreadcrumbBackProps = HTMLProps<HTMLLIElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
