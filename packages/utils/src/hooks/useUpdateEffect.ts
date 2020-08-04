import { DependencyList, useEffect, useRef } from 'react';

export const useUpdateEffect = (effect: () => void, dependencies: DependencyList = []) => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            effect();
        }
    }, dependencies);
};
