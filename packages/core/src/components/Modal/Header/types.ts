import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement>, WithThemeProp {
    id: string;
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
    };
}
