import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { Dispatch, FCC } from 'react';
import { ScrollActionTypes } from '../Modal/scrollStateReducer/types';
import { DrawerFooterProps } from './Footer/types';

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    open?: boolean;
    position?: 'left' | 'right';
    onClose: () => void;
    width?: string;
    withOverlay?: boolean;
}

export interface DrawerStaticProps {
    Content: FCC & WithStyle;
    Footer: FCC<DrawerFooterProps> & WithStyle;
    Header: FCC & WithStyle;
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
