export const maxColumnSizeReducer = (state: {}, action: { type: 'ADD_SIZE'; field: string; value: number }) => {
    switch (action.type) {
        case 'ADD_SIZE': {
            // @ts-ignore
            const currSize = state[action.field] || 0;
            return {
                ...state,
                [action.field]: currSize < action.value ? action.value + 20 : currSize
            };
        }
        default:
            return state;
    }
};
