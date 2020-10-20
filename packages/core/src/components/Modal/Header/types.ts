import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    setHeaderHeight: (height: number) => void;
    id: string;
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
        scrollPosition: number;
    };
}
