import { MutableRefObject, useCallback, useEffect, useState } from 'react';

/**
 * A custom hook to detect when the user is pressing a specific key or a collection of keys
 *
 * @param {string | string[]} targetKeys -  The key(s) to watch
 * @param {boolean} [stopPropagation=false] - To prevent the propagation action that belongs to the event
 * @param {MutableRefObject<any>} [ref] - To prevent the default action that belongs to the event
 *
 * @returns {boolean} - TRUE  a match.
 */
export const useKeyPress = (targetKeys: string | string[], stopPropagation = false, ref?: MutableRefObject<any>): boolean => {
    if (targetKeys.length === 0) {
        throw new Error(`[Invalid parameter]: 'targetKeys' cannot be empty.`);
    }

    const [keysPressed, setKeyPressed] = useState<string[]>([]),
        [allKeysPressed, setAllKeysPressed] = useState<boolean>(false);

    const downHandler = useCallback(
        (event: KeyboardEvent) => {
            if (event.repeat) return;
            if (Array.isArray(targetKeys) ? targetKeys.includes(event.key) : event.key === targetKeys) {
                setKeyPressed(oldKeys => Array.from(new Set([...oldKeys, event.key])));
                stopPropagation && event.stopPropagation();
            }
        },
        [stopPropagation, targetKeys]
    );

    const upHandler = useCallback(
        (event: KeyboardEvent) => {
            if (Array.isArray(targetKeys) ? targetKeys.includes(event.key) : event.key === targetKeys) {
                setKeyPressed(oldKeys => oldKeys.filter(oldKey => oldKey !== event.key));
                stopPropagation && event.stopPropagation();
            }
        },
        [stopPropagation, targetKeys]
    );

    useEffect(() => {
        Array.isArray(targetKeys)
            ? setAllKeysPressed(targetKeys.every((key, index) => keysPressed[index] === key))
            : setAllKeysPressed(keysPressed.includes(targetKeys));
    }, [targetKeys, keysPressed]);

    useEffect(() => {
        const element = ref?.current ?? window;
        element.addEventListener('keydown', downHandler);
        element.addEventListener('keyup', upHandler);
        return () => {
            element.removeEventListener('keydown', downHandler);
            element.removeEventListener('keyup', upHandler);
        };
    }, []);

    return allKeysPressed;
};
