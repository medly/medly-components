import { WithStyle } from '@medly-components/utils';
import { Props as FooterProps } from './Footer/type';

export interface Props {
    open?: boolean;
    position?: 'left' | 'right';
    onClose: () => void;
    width?: string;
}

export interface DrawerStaticProps {
    Content?: React.FC & WithStyle;
    Footer?: React.FC<FooterProps> & WithStyle;
    Header?: React.FC & WithStyle;
}

interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}

export interface DrawerContextType {
    scrollState?: ScrollState;
    dispatch?: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
    onClose: () => void;
}

export type DrawerStyledProps = { position: string; width: string; open: boolean };