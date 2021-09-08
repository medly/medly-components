import { useEffect, useState } from 'react';
import { debounce } from '../helpers';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' && window.innerWidth,
        height: typeof window !== 'undefined' && window.innerHeight
    });

    useEffect(() => {
        const handleResize = debounce(
            () =>
                typeof window !== 'undefined' &&
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                }),
            25
        );

        typeof window !== 'undefined' && window.addEventListener('resize', handleResize);
        handleResize();
        return () => typeof window !== 'undefined' && window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
