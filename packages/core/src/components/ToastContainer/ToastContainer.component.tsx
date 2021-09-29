import { WithStyle } from '@medly-components/utils';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import Toast from '../Toast';
import * as Styled from './ToastContainer.styled';
import { toastStore } from './ToastStore';
import { ToastContainerProps } from './types';

const Component: FC<ToastContainerProps> = React.memo(
    React.forwardRef((props, ref) => {
        const toasts = useStore(toastStore);

        return toasts.length > 0 ? (
            <Styled.Container ref={ref} {...props}>
                {toasts.map(toast => (
                    <Toast key={toast.id} {...toast} />
                ))}
            </Styled.Container>
        ) : null;
    })
);
Component.defaultProps = {
    position: 'top'
};
Component.displayName = 'ToastContainer';
export const ToastContainer: FC<ToastContainerProps> & WithStyle = Object.assign(Component, { Style: Styled.Container });
