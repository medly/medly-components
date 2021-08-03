import { HTMLProps, WithStyle } from '@medly-components/utils';
import { DrawerFooterProps  } from './Footer/types';

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
    open?: boolean;
    position?: 'left' | 'right';
    onClose: () => void;
    width?: string;
    withOverlay?: boolean;
}

export interface DrawerStaticProps {
    Content?: React.FC & WithStyle;
    Footer?: React.FC<DrawerFooterProps> & WithStyle;
    Header?: React.FC & WithStyle;
}

interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}

export interface DrawerContextType {
    id: string;
    scrollState?: ScrollState;
    dispatch?: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
    onClose: () => void;
}

export type DrawerStyledProps = { position: string; width: string; open: boolean };
