import { HTMLProps } from '@medly-components/utils';

export interface TabPanelProps extends HTMLProps<HTMLDivElement> {
    active: any;
    forceRender?: boolean;
}

export interface StyledProps extends HTMLProps<HTMLDivElement> {
    isActive: boolean;
}
