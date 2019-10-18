import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLAnchorElement> {
    /** Link url */
    href: string;
}
