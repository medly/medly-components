import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    open?: boolean;
    onCloseModal?: () => void;
}

export interface ModalStaticProps {
    Header: React.SFC;
    Content: React.SFC;
    Actions: React.SFC;
}
