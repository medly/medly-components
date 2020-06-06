import { styled } from '@medly-components/utils';
import React from 'react';
import { Props } from './types';

export const positions: Props['position'][] = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

export const ToastButtons: React.SFC = styled.div`
    & > * {
        margin: 2rem;
    }
`;
ToastButtons.displayName = 'ToastButtons';
