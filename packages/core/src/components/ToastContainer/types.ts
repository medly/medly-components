import { HTMLProps } from '@medly-components/utils';

export type Props = HTMLProps<HTMLDivElement> & {
    position?: 'top-start' | 'top' | 'top-end' | 'right' | 'left' | 'bottom-end' | 'bottom' | 'bottom-start';
};
