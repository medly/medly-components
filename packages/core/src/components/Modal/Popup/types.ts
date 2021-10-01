import { HTMLProps } from '@medly-components/utils';

export interface ModalPopupProps extends HTMLProps<HTMLDivElement> {
    minWidth?: string;
    minHeight?: string;
    open?: boolean;
}
