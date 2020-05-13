export const reducer = (
    state: { scrolledToTop: boolean; scrolledToBottom: boolean },
    action: { type: 'scrolledToTop' | 'scrolledToBottom'; value: boolean }
) => {
    switch (action.type) {
        case 'scrolledToTop':
            return { ...state, scrolledToTop: action.value };
        case 'scrolledToBottom':
            return { ...state, scrolledToBottom: action.value };
    }
};
