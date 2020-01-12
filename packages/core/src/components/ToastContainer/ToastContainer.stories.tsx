import { select } from '@storybook/addon-knobs';
import React from 'react';
import Toast from '../Toast';
import { ToastContainer } from './ToastContainer.component';
import { Props } from './types';

const position: Array<Props['position']> = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

export const Basic = () => (
    <ToastContainer position={select('Position', position, 'bottom')}>
        <Toast variant="success">Hello</Toast>
        <Toast variant="success">Guest</Toast>
    </ToastContainer>
);
