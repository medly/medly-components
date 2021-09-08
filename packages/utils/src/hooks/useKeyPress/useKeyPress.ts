import { useCallback, useEffect, useState } from 'react';

/**
 * A custom hook to detect when the user is pressing a specific key or a collection of keys
 *
 * @param {targetKeys} -  The key(s) to watch
 * @param {defaultPrevented} - To prevent the default action that belongs to the event
 *
 * @returns {boolean} - TRUE returns a match.
 */
export const useKeyPress = (targetKeys: string | string[], defaultPrevented = false): boolean => {
    if (targetKeys.length === 0) {
        throw new Error(`[Invalid parameter]: 'targetKeys' cannot be empty.`);
    }

    const [keysPressed, setKeyPressed] = useState<string[]>([]),
        [allKeysPressed, setAllKeysPressed] = useState<boolean>(false);

    const downHandler = useCallback(
        (event: KeyboardEvent) => {
            if (event.repeat) return;
            setKeyPressed(oldKeys => Array.from(new Set([...oldKeys, event.key])));
            defaultPrevented && event.preventDefault();
        },
        [defaultPrevented]
    );

    const upHandler = useCallback(
        (event: KeyboardEvent) => {
            setKeyPressed(oldKeys => oldKeys.filter(oldKey => oldKey !== event.key));
            defaultPrevented && event.preventDefault();
        },
        [defaultPrevented]
    );

    useEffect(() => {
        Array.isArray(targetKeys)
            ? setAllKeysPressed(targetKeys.every((key, index) => keysPressed[index] === key))
            : setAllKeysPressed(keysPressed.includes(targetKeys));
    }, [targetKeys, keysPressed]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', downHandler);
            window.addEventListener('keyup', upHandler);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('keydown', downHandler);
                window.removeEventListener('keyup', upHandler);
            }
        };
    }, []);

    return allKeysPressed;
};
