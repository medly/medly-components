import { css, fullHeight, fullWidth, styled } from '@medly-components/utils';
import { PopupProps } from './types';

export const getPosition = ({ placement, distance }: Partial<PopupProps>) => {
    switch (placement) {
        case 'top-start':
            return css`
                bottom: calc(100% + ${distance || '0px'});
                left: 0%;
            `;
        case 'top':
            return css`
                bottom: calc(100% + ${distance || '0px'});
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'top-end':
            return css`
                bottom: calc(100% + ${distance || '0px'});
                right: 0%;
            `;
        case 'right-start':
            return css`
                top: 0%;
                left: calc(100% + ${distance || '0px'});
            `;
        case 'right':
            return css`
                left: calc(100% + ${distance || '0px'});
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'right-end':
            return css`
                bottom: 0;
                left: calc(100% + ${distance || '0px'});
            `;
        case 'bottom-start':
            return css`
                top: calc(100% + ${distance || '0px'});
                left: 0%;
            `;
        case 'bottom':
            return css`
                top: calc(100% + ${distance || '0px'});
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'bottom-end':
            return css`
                top: calc(100% + ${distance || '0px'});
                right: 0%;
            `;
        case 'left-start':
            return css`
                right: calc(100% + ${distance || '0px'});
                top: 0%;
            `;
        case 'left':
            return css`
                right: calc(100% + ${distance || '0px'});
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'left-end':
            return css`
                right: calc(100% + ${distance || '0px'});
                bottom: 0%;
            `;
    }
};

export const PopupStyled = styled('div')<PopupProps>`
    position: absolute;
    z-index: 1000;

    ${getPosition}
    ${props => props.fullWidth && fullWidth()};
    ${props => props.fullHeight && fullHeight()};
`;
