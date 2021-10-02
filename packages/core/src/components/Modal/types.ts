import { HTMLProps, WithStyle } from '@medly-components/utils';
import { ModalActionUserProps } from './Actions/types';
import { ModalPopupProps } from './Popup/types';
import { ScrollActionTypes } from './scrollStateReducer/types';

export interface ModalProps extends HTMLProps<HTMLDivElement> {
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

export interface ModalBackgroundProps {
    open?: boolean;
    isSmallScreen: boolean;
}

export interface ModalStaticProps {
    Popup: React.FC<ModalPopupProps> & WithStyle;
    Header: React.FC & WithStyle;
    Content: React.FC & WithStyle;
    Actions: React.FC<ModalActionUserProps> & WithStyle;
}

export interface InnerContainerProps {
    /** height of the header component */
    headerHeight: number;
}

export interface UseScrollStateProps {
    scrollState: ScrollState;
    ref: React.RefObject<HTMLDivElement>;
    dispatch: React.Dispatch<ScrollActionTypes>;
}

export interface ModalContextType {
    headerHeight: number;
    setHeaderHeight: (height: number) => void;
    scrollState: ScrollState;
    dispatch: React.Dispatch<ScrollActionTypes>;
    id: string;
    isSmallScreen: boolean;
}

export interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}
