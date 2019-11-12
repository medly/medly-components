import React from 'react';
import Text from '../Text';
import { CssBaseline } from './CssBaseline.styled';

export const Basic = () => (
    <>
        <CssBaseline />
        <Text fullWidth textWeight="Light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text fullWidth textWeight="Normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Text fullWidth textWeight="Strong">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
    </>
);
