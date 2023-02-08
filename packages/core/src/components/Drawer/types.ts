import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { Dispatch, FC } from 'react';
import { ScrollActionTypes } from '../Modal/scrollStateReducer/types';
import { DrawerFooterProps } from './Footer/types';

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    /** Shows drawer only when this prop is true */
    open?: boolean;
    /** Position of the drawer*/
    position?: 'left' | 'right';
    /** Function to be called on closing drawer */
    onClose: () => void;
    /** Width of the drawer */
    width?: string;
    /** set it true to show it with the overlay */
    withOverlay?: boolean;
}

export interface DrawerStaticProps {
    Content: FC & WithStyle;
    Footer: FC<DrawerFooterProps> & WithStyle;
    Header: FC & WithStyle;
}

interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}

export interface DrawerContextType {
    id: string;
    scrollState: ScrollState;
    dispatch: Dispatch<ScrollActionTypes>;
    onClose: () => void;
}

export type DrawerStyledProps = { position: string; width: string; open?: boolean };
