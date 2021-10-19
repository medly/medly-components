export const debounce = (func: (...args: any) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;

    return function executedFunction(...args: any[]) {
        const later = () => {
            timeout && clearTimeout(timeout);
            func(...args);
        };

        timeout && clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
