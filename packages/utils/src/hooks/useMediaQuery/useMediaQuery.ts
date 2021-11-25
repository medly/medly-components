import { useEffect, useState } from 'react';

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
