import { HTMLProps, WithStyle, WithThemeProp } from '@medly-components/utils';
import { Props as ModalPopupProps } from './ModalPopup/types';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    /** Shows modal only when this prop is true */
    open?: boolean;
    /** Function to be called on closing modal */
    onCloseModal?: () => void;
    /** Min width in px/rem/% (1rem = 10px)*/
    minWidth?: string;
    /** Min height in px/rem/% (1rem = 10px)*/
    minHeight?: string;
}

export interface ModalStaticProps {
    Popup?: React.SFC<ModalPopupProps> & WithStyle;
    Header?: React.SFC;
    Content?: React.SFC;
    Actions?: React.SFC;
}
