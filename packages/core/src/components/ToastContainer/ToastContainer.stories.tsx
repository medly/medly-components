import { select } from '@storybook/addon-knobs';
import React from 'react';
import { ToastContainer } from './ToastContainer.component';
import { addToast } from './ToastStore';
import { Props } from './types';

const position: Props['position'][] = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

export const Basic = () => {
    return (
        <div>
            <ToastContainer position={select('Position', position, 'bottom')}></ToastContainer>
            <button
                onClick={() => {
                    addToast({
                        variant: 'info',
                        heading: 'Default Notication',
                        message: 'If there is a long description that breaks to multiple lines, then the height of the '
                    });
                }}
            >
                Raise toast
            </button>
        </div>
    );
};
