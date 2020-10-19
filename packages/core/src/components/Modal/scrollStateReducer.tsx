export const reducer = (
    state: { scrolledToTop: boolean; scrolledToBottom: boolean; scrollPosition: number },
    action: { type: 'scrolledToTop' | 'scrolledToBottom' | 'scrollPosition'; value: boolean | number }
) => {
    switch (action.type) {
        case 'scrolledToTop':
            return { ...state, scrolledToTop: action.value };
        case 'scrolledToBottom':
            return { ...state, scrolledToBottom: action.value };
        case 'scrollPosition':
            return { ...state, scrollPosition: action.value };
    }
};
