import { css, styled } from '@medly-components/utils';
import { SFC } from 'react';
import { Props } from './types';

const getPosition = (position: Props['position']) => {
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

export const ToastContainer: SFC<Props> = styled('div')<Props>`
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: fixed;
    z-index: 1000;
    ${({ position }) => getPosition(position)}
`;

ToastContainer.defaultProps = {
    position: 'top'
};
