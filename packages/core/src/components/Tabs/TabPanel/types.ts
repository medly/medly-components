import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    forceRender?: boolean;
}

export interface StyledProps extends HTMLProps<HTMLDivElement> {
    isActive: boolean;
}
