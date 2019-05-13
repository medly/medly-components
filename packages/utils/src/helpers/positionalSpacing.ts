export const positionalSpacing = (position: 'top' | 'bottom' | 'start' | 'end', spacing: string) => {
    switch (position) {
        case 'top':
            return `0px 0px ${spacing} 0px`;
        case 'bottom':
            return `${spacing} 0px 0px 0px`;
        case 'start':
            return `0px ${spacing} 0px 0px`;
        case 'end':
            return `0px 0px 0px ${spacing}`;
        default:
            return `0px`;
    }
};
