import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLAnchorElement> {
    href: string;
}
