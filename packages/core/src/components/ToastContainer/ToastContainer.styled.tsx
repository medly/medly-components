import styled, { css } from 'styled-components';
import { ToastContainerProps } from './types';

const getPosition = (position: ToastContainerProps['position']) => {
    switch (position) {
        case 'top-start':
            return css`
                top: 0;
                left: 0;
            `;
        case 'top':
            return css`
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'top-end':
            return css`
                top: 0;
                right: 0;
            `;
        case 'right':
            return css`
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'left':
            return css`
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'bottom-start':
            return css`
                bottom: 0;
                left: 0;
            `;
        case 'bottom':
            return css`
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'bottom-end':
            return css`
                bottom: 0;
                right: 0;
            `;
    }
};

export const Container = styled('div')<ToastContainerProps>`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    position: fixed;
    z-index: 1001;
    ${({ position }) => getPosition(position)}

    & > * + * {
        margin-top: 2rem;
    }
`;
