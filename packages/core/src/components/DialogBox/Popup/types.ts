import { HTMLProps } from '@medly-components/utils';

export interface DialogBoxPopupProps extends HTMLProps<HTMLDivElement> {
    minWidth?: string;
    minHeight?: string;
    open?: boolean;
}
