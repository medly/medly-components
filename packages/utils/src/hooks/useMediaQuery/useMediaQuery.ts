import { useEffect, useState } from 'react';

/**
 * Checks if the media query matches the current window size and returns a boolean value
 *
 * @param {string} queryInput String which contains the media queries
 *
 * @returns {boolean} Returns if the query is true or false for the current query window size
 */
export const useMediaQuery = (queryInput: string): boolean => {
    const query = queryInput.replace('@media ', ''),
        [matches, setMatches] = useState(typeof window !== 'undefined' && !!window.matchMedia(query).matches);

    useEffect(() => {
        const queryList = window.matchMedia(query),
            documentChangeHandler = () => setMatches(queryList.matches);

        queryList.addListener(documentChangeHandler);
        documentChangeHandler();
        return () => queryList.removeListener(documentChangeHandler);
    }, [query]);

    return matches;
};
