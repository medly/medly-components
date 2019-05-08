import React, { useEffect } from 'react';

export const useOuterClickNotifier = (onOuterClick: (e: any) => void, innerRef: React.MutableRefObject<any>) => {
    const handleClick = (e: any) => {
        if (!innerRef.current.contains(e.target)) {
            onOuterClick(e);
        }
    };

    useEffect(() => {
        if (innerRef.current) {
            document.addEventListener('click', handleClick);
        }

        return () => document.removeEventListener('click', handleClick);
    }, [onOuterClick, innerRef]);
};
