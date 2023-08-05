import { HTMLProps } from '@medly-components/utils';

export type AccordionContentProps = HTMLProps<HTMLDivElement> & {
    /** Use to render any component as Accordion content */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
