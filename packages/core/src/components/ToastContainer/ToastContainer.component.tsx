import { WithStyle } from '@medly-components/utils';
import { useStore } from 'effector-react';
import React, { SFC } from 'react';
import Toast from '../Toast';
import * as Styled from './ToastContainer.styled';
import toast from './ToastStore';
import { Props } from './types';

export const ToastContainer: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const toasts = useStore(toast);
        return (
            <Styled.Container ref={ref} {...props}>
                {toasts.map(toast => {
                    return <Toast key={toast.id} heading={toast.heading} message={toast.message} variant={toast.variant}></Toast>;
                })}
            </Styled.Container>
        );
    })
);
ToastContainer.defaultProps = {
    position: 'top'
};
ToastContainer.displayName = 'ToastContainer';
ToastContainer.Style = Styled.Container;
