export interface Props {
    id: string;
    headerHeight: number;
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
        scrollPosition: number;
    };
}
