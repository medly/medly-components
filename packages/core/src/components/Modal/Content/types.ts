export interface Props {
    //TODO: do these need to be optional?
    id?: string;
    headerHeight?: number;
    scrollState?: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
        scrollPosition: number;
    };
}
