export type ModalActionUserProps = {
    /** Use this to align actions horizontally */
    alignItems?: 'left' | 'center' | 'right';
};

export type Props = ModalActionUserProps & {
    id: string;
    scrollState: {
        scrolledToTop: boolean;
        scrolledToBottom: boolean;
    };
    isSmallScreen: boolean;
};
