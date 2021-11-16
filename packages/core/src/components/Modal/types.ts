import { HTMLProps, WithStyle } from '@medly-components/utils';
import { ModalActionUserProps } from './Actions/types';
import { ModalPopupProps } from './Popup/types';
import { ScrollActionTypes } from './scrollStateReducer/types';
import type { FC, Dispatch, RefObject } from 'react';

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
    Popup: FC<ModalPopupProps> & WithStyle;
    Header: FC & WithStyle;
    Content: FC & WithStyle;
    Actions: FC<ModalActionUserProps> & WithStyle;
}

export interface InnerContainerProps {
    /** height of the header component */
    headerHeight: number;
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
}

export interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}
