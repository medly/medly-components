export const positionalSpacing = (position: 'top' | 'bottom' | 'left' | 'right', spacing: string) => {
    switch (position) {
        case 'top':
            return `${spacing} 0px 0px 0px`;
        case 'bottom':
            return `0px 0px ${spacing} 0px`;
        case 'left':
            return `0px 0px 0px ${spacing}`;
        case 'right':
            return `0px ${spacing} 0px 0px`;
        default:
            return `0px`;
    }
};

export const oppositePositionalspacing = (position: 'top' | 'bottom' | 'left' | 'right', spacing: string) => {
    switch (position) {
        case 'top':
            return `0px 0px ${spacing} 0px`;
        case 'bottom':
            return `${spacing} 0px 0px 0px`;
        case 'left':
            return `0px ${spacing} 0px 0px`;
        case 'right':
            return `0px 0px 0px ${spacing}`;
        default:
            return `0px`;
    }
};
