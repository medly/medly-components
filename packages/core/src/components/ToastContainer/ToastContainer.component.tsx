import { WithStyle } from '@medly-components/utils';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import Toast from '../Toast';
import * as Styled from './ToastContainer.styled';
import { toastStore } from './ToastStore';
import { ToastContainerProps } from './types';

export const ToastContainer: FC<ToastContainerProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const toasts = useStore(toastStore);

        return (
            <Styled.Container ref={ref} {...props}>
                {toasts.map(toast => (
                    <Toast key={toast.id} {...toast} />
                ))}
            </Styled.Container>
        );
    })
);
ToastContainer.defaultProps = {
    position: 'top'
};
ToastContainer.displayName = 'ToastContainer';
ToastContainer.Style = Styled.Container;
