import React, { useEffect } from 'react';

export const useOuterClickNotifier = (onOuterClick: (e: any) => void, innerRef: React.MutableRefObject<any>) => {
    const handleClick = (e: any) => {
        const isReactDatePicker = e.target.closest('[data-testid = "Day"]');

        if (!innerRef.current.contains(e.target) && !isReactDatePicker) {
            onOuterClick(e);
        }
    };

    const handleEscPress = (e: any) => {
        if (e.keyCode === 27) {
            onOuterClick(e);
        }
    };

    useEffect(() => {
        if (innerRef.current) {
            document.addEventListener('click', handleClick);
            document.addEventListener('keydown', handleEscPress);
        }

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleEscPress);
        };
    }, [onOuterClick, innerRef]);
};
