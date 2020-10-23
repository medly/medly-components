import { HTMLProps, WithStyle, WithThemeProp } from '@medly-components/utils';
import { MutableRefObject } from 'react';
import { ModalActionUserProps } from './Actions/types';
import { Props as ModalPopupProps } from './Popup/types';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
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
    Popup?: React.FC<ModalPopupProps> & WithStyle;
    Header?: React.FC & WithStyle;
    Content?: React.FC & WithStyle;
    Actions?: React.FC<ModalActionUserProps> & WithStyle;
}

export interface ContentHeaderProps {
    /** height of the header component */
    headerHeight: number;
}

export interface UseScrollStateProps {
    scrollState: ScrollState;
    ref: MutableRefObject<HTMLDivElement>;
    dispatch: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
}

export interface ModalContextType {
    headerHeight?: number;
    setHeaderHeight?: (height: number) => void;
    scrollState?: ScrollState;
    dispatch?: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
    id?: string;
    isSmallScreen?: boolean;
}

export interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}
