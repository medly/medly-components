import { MutableRefObject, useEffect } from 'react';

/**
 * Triggers a function when user clicks outside the given ref or presses Esc key
 *
 * @param {(e: any) => void} onOuterClick function to be fired when user clicks outside
 * @param {React.MutableRefObject<any>} innerRef ref of the element
 */
export const useOuterClickNotifier = (onOuterClick: (e: any) => void, innerRef: MutableRefObject<any>) => {
    const handleClick = (e: any) => {
        const isReactDatePicker = e.target.closest('[data-testid = "Day"]');

        if (innerRef.current && e.target.isConnected && !innerRef.current.contains(e.target) && !isReactDatePicker) {
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
