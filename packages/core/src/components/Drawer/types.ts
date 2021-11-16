import { HTMLProps, WithStyle } from '@medly-components/utils';
import { ScrollActionTypes } from '../Modal/scrollStateReducer/types';
import { DrawerFooterProps } from './Footer/types';
import type { FC, Dispatch } from 'react';

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    open?: boolean;
    position?: 'left' | 'right';
    onClose: () => void;
    width?: string;
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
