import { MutableRefObject, useCallback, useEffect, useState } from 'react';

/**
 * A custom hook to detect when the user is pressing a specific key or a collection of keys
 *
 * @param {string | string[]} targetKeys -  The key(s) to watch
 * @param {boolean} [defaultPrevented=false] - To prevent the default action that belongs to the event
 * @param {MutableRefObject<any>} [ref] - To prevent the default action that belongs to the event
 *
 * @returns {boolean} - TRUE  a match.
 */
export const useKeyPress = (targetKeys: string | string[], defaultPrevented = false, ref?: MutableRefObject<any>): boolean => {
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
        const element = ref && ref.current ? ref.current : window;

        element.addEventListener('keydown', downHandler);
        element.addEventListener('keyup', upHandler);
        return () => {
            element.removeEventListener('keydown', downHandler);
            element.removeEventListener('keyup', upHandler);
        };
    }, []);

    return allKeysPressed;
};
