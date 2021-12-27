import { useEffect, useState } from 'react';
import { debounce } from '../../helpers';

/**
 * A hook for resizing DOM elements
 *
 *  * @returns { height: string; width: string } - An object with height and width.
 *
 */
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
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
