import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Toast container position
     * @default top
     */
    position?: 'top-start' | 'top' | 'top-end' | 'right' | 'left' | 'bottom-end' | 'bottom' | 'bottom-start';
}
