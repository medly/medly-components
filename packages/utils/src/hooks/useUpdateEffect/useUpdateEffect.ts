import { DependencyList, useEffect, useRef } from 'react';

/**
 * An useEffect that does not run on first render
 *
 * @param {() => void} effect -  The function to be executed on effect
 * @param {DependencyList} dependencies -  If present, effect will only activate if the values in the list change.
 *
 */
export const useUpdateEffect = (effect: () => void, dependencies: DependencyList = []) => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) isInitialMount.current = false;
        else effect();
    }, dependencies);
};
