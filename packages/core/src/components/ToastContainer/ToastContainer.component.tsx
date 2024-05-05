import { WithStyle } from '@medly-components/utils';
import { useStore } from 'effector-react';
import type { FCC } from 'react';
import { forwardRef, memo } from 'react';
import Toast from '../Toast';
import * as Styled from './ToastContainer.styled';
import { toastStore } from './ToastStore';
import { ToastContainerProps } from './types';

const Component: FCC<ToastContainerProps> = memo(
    forwardRef((props, ref) => {
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
export const ToastContainer: FCC<ToastContainerProps> & WithStyle = Object.assign(Component, { Style: Styled.Container });
