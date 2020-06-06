import { styled } from '@medly-components/utils';
import React, {SFC} from 'react';
import { Props } from './types';
import { Toast } from './ToastStore'

export const positions: Props['position'][] = ['top-start', 'top', 'top-end', 'right', 'left', 'bottom-start', 'bottom', 'bottom-end'];

export const AddToast: SFC<Toast> = () => null;

export const ToastButtons: React.SFC = styled.div`
    & > * {
        margin: 2rem;
    }
`;
ToastButtons.displayName = 'ToastButtons';
