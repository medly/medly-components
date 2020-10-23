import { useEffect, useState } from 'react';
import { debounce } from '../helpers';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = debounce(
            () =>
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                }),
            25
        );

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
