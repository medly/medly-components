import { useLayoutEffect, useRef } from 'react';

export const useRunAfterUpdate = () => {
    const afterPaintRef = useRef<() => void>(null);

    useLayoutEffect(() => {
        if (afterPaintRef.current) {
            afterPaintRef.current();
            // @ts-expect-error
            afterPaintRef.current = null;
        }
    });

    // @ts-expect-error
    return (fn: () => void) => (afterPaintRef.current = fn);
};
