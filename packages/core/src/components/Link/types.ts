import { HTMLProps } from '@medly-components/utils';

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    /** Link URL */
    href: string;
}
