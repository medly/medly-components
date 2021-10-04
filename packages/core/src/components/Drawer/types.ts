import { HTMLProps, WithStyle } from '@medly-components/utils';
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
    Content: React.FC & WithStyle;
    Footer: React.FC<DrawerFooterProps> & WithStyle;
    Header: React.FC & WithStyle;
}

interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}

export interface DrawerContextType {
    id: string;
    scrollState: ScrollState;
    dispatch: React.Dispatch<ScrollActionTypes>;
    onClose: () => void;
}

export type DrawerStyledProps = { position: string; width: string; open?: boolean };
