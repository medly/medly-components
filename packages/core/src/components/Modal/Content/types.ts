export interface Props {
    id: string;
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
    };
    dispatch: React.Dispatch<{
        type: 'scrolledToTop' | 'scrolledToBottom';
        value: boolean;
    }>;
}
