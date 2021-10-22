import { HTMLProps, WithStyle } from '@medly-components/utils';
import { DialogBoxActionUserProps } from './Actions/types';
import { DialogBoxPopupProps } from './Popup/types';

export interface DialogBoxProps extends HTMLProps<HTMLDivElement> {
    /** Shows modal only when this prop is true */
    open?: boolean;
    /** Function to be called on closing modal */
    onCloseModal?: () => void;
    /** Min width in px/rem/% (1rem = 10px) */
    minWidth?: string;
    /** Min height in px/rem/% (1rem = 10px) */
    minHeight?: string;
    /** Set it true to close the modal on click outside of popup */
    shouldCloseOnOutsideClick?: boolean;
}

export interface DialogBoxBackgroundProps {
    open?: boolean;
}

export interface DialogBoxStaticProps {
    Popup: React.FC<DialogBoxPopupProps> & WithStyle;
    Header: React.FC & WithStyle;
    Content: React.FC & WithStyle;
    Actions: React.FC<DialogBoxActionUserProps> & WithStyle;
}
export interface DialogBoxContextType {
    id: string;
}
