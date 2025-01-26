import type { ScrollActionTypes } from '@medly-components/utils';
import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { Dispatch, FC } from 'react';
import { DrawerFooterProps } from './Footer/types';

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    open?: boolean;
    position?: 'left' | 'right';
    onClose: () => void;
    width?: string;
    withOverlay?: boolean;
    shouldCloseOnOutsideClick?: boolean;
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
