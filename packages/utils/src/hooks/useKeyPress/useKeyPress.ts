import { useCallback, useEffect, useState } from 'react';

export const useKeyPress = (
    targetKey: string | Array<string>,
    defaultPrevented = false
): boolean => {
    const [keysPressed, setKeyPressed] = useState<Array<string>>([]),
        [targetKeys, setTargetKeys] = useState<Array<string>>([]),
        [allKeysPressed, setAllKeysPressed] = useState<boolean>(false);

    const downHandler = useCallback(
        (event: KeyboardEvent) => {
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

    useEffect(
        () =>
            typeof targetKey === 'string'
                ? setTargetKeys(targetKey.split(' '))
                : setTargetKeys(targetKey),
        []
    );

    useEffect(() => {
        targetKeys.length
            ? setAllKeysPressed(
                targetKeys.every((key, index) => keysPressed[index] === key)
            )
            : setAllKeysPressed(false);
    }, [targetKeys, keysPressed]);

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []);

    return allKeysPressed;
};
