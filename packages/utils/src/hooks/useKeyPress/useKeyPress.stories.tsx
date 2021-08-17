import { Text } from '@medly-components/core';
import React, { useEffect, useState } from 'react';
import { useKeyPress } from './useKeyPress';
import { DisplayDiv, Div } from './useKeyPress.styled';

export const Basic = () => {
    const [counter, setCounter] = useState<number>(0),
        arrowUpPressed = useKeyPress('ArrowUp'),
        arrowDownPressed = useKeyPress(['ArrowDown']);

    useEffect(() => {
        arrowUpPressed && setCounter(s => s + 1);
    }, [arrowUpPressed]);
    useEffect(() => {
        arrowDownPressed && setCounter(s => s - 1);
    }, [arrowDownPressed]);

    return (
        <>
            <Text>Try pressing the following: </Text>
            <Div>
                <Text>
                    1. Press <code>ArrowUp</code> ⬆️ key to increase the number.
                </Text>
            </Div>
            <Div>
                <Text>
                    2. Press <code>ArrowDown</code> ⬇️ key to decrease the number.
                </Text>
            </Div>
            <Div>
                <Text textWeight="Strong">{`Counter: ${counter}`}</Text>
            </Div>
        </>
    );
};

export const Compound = () => {
    const isShiftCPressed = useKeyPress(['Shift', 'C']),
        isDhjPressed = useKeyPress(['d', 'h', 'j'], true);

    return (
        <>
            <Text>Try pressing the following keys:</Text>
            <Div>
                1. <Text textWeight={isShiftCPressed ? 'Strong' : 'Regular'}>Shift + C</Text>
            </Div>
            <Div>
                2. <Text textWeight={isDhjPressed ? 'Strong' : 'Regular'}>D + H + J</Text>
            </Div>
            <DisplayDiv>
                {isShiftCPressed && '😊'}
                {isDhjPressed && '👌🏻'}
            </DisplayDiv>
        </>
    );
};
