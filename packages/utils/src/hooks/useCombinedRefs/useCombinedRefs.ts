import { useEffect, useRef } from 'react';

/**
 * Combines all the refs provided
 *
 * @param {...<T>} refs refs to be combined
 *
 * @returns {React.MutableRefObject<T>} The combined ref
 */
export const useCombinedRefs = <T>(...refs: any[]) => {
    const targetRef = useRef<T>(null);

    useEffect(() => {
        refs.forEach(ref => {
            if (!ref) return;

            if (typeof ref === 'function') {
                ref(targetRef.current);
            } else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);

    return targetRef;
};
