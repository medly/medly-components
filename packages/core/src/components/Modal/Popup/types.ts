import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    minWidth?: string;
    minHeight?: string;
    open?: boolean;
    isSmallScreen: boolean;
}
