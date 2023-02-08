import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { Dispatch, FC, RefObject } from 'react';
import { ModalFooterProps } from './Footer/types';
import { ModalPopupProps } from './Popup/types';
import { ScrollActionTypes } from './scrollStateReducer/types';

export interface ModalProps extends HTMLProps<HTMLDivElement> {
    /** Shows modal only when this prop is true */
    open?: boolean;
    /** Function to be called on closing modal */
    onClose?: () => void;
    /** Set it true to allow modal overflow to be visible */
    overflowVisible?: boolean;
    /** Min width in px/rem/% (1rem = 10px) */
    minWidth?: string;
    /** Min height in px/rem/% (1rem = 10px) */
    minHeight?: string;
    /** Set it true to close the modal when clicked outside the modal */
    shouldCloseOnOutsideClick?: boolean;
    /** Set it true to disable closing of modal on Escape key press */
    disableEscapeKeyDown?: boolean;
}

export interface ModalBackgroundProps {
    open?: boolean;
    isSmallScreen: boolean;
}

interface ContentProps {
    overflowVisible?: boolean;
}

export interface ModalStaticProps {
    Popup: FC<ModalPopupProps> & WithStyle;
    Header: FC & WithStyle;
    Content: FC<ContentProps> & WithStyle;
    Footer: FC<ModalFooterProps> & WithStyle;
}

export interface InnerContainerProps {
    /** height of the header component */
    headerHeight: number;
    overflowVisible?: boolean;
}

export interface UseScrollStateProps {
    scrollState: ScrollState;
    ref: RefObject<HTMLDivElement>;
    dispatch: Dispatch<ScrollActionTypes>;
}

export interface ModalContextType {
    headerHeight: number;
    setHeaderHeight: (height: number) => void;
    scrollState: ScrollState;
    dispatch: Dispatch<ScrollActionTypes>;
    id: string;
    isSmallScreen: boolean;
    overflowVisible?: boolean;
}

export interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}
