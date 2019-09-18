import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Toast from '../Toast';
import { ToastContainer } from './ToastContainer.styled';
import { Props } from './types';

const position: Array<Props['position']> = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

storiesOf('Core', module).add('ToastContainer', () => (
    <ToastContainer position={select('Position', position, 'top')}>
        <Toast variant="success">Hello</Toast>
        <Toast variant="success">Guest</Toast>
    </ToastContainer>
));
