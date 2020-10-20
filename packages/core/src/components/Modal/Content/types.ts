export interface Props {
    id: string;
    headerHeight: number;
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
        scrollPosition: number;
    };
    dispatch: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition';
        value: boolean | number;
    }>;
}
