export const debounce = (func: (...args: any) => void, wait: number) => {
    let timeout: number;

    return function executedFunction(...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
