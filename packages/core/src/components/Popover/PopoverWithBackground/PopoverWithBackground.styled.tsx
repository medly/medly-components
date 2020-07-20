import { css, fullHeight, fullWidth, styled } from '@medly-components/utils';
import { Placement } from '../PopoverWrapper/types';
import { Props } from './types';

const getContainerMargin = (placement: Placement) => {
    switch (placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
            return css`
                bottom: calc(100% + 15px);
            `;
        case 'right':
        case 'right-start':
        case 'right-end':
            return css`
                left: calc(100% + 15px);
            `;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
            return css`
                top: calc(100% + 15px);
            `;
        case 'left':
        case 'left-start':
        case 'left-end':
            return css`
                right: calc(100% + 15px);
            `;
    }
};

const getRectangleShadow = (placement: Placement) => {
    switch (placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
            return css`
                box-shadow: 0 0.4rem 1.6rem rgba(176, 188, 200, 0.5);
            `;
        case 'right':
        case 'right-start':
        case 'right-end':
            return css`
                box-shadow: -0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
            `;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
            return css`
                box-shadow: 0 -0.4rem 1.6rem rgba(176, 188, 200, 0.5);
            `;
        case 'left':
        case 'left-start':
        case 'left-end':
            return css`
                box-shadow: 0.4rem 0 1.6rem rgba(176, 188, 200, 0.5);
            `;
    }
};

const getTriangleStyle = (placement: Placement) => {
    switch (placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
            return css`
                transform: translateX(-50%);
                top: 100%;
                left: 50%;
            `;
        case 'right':
        case 'right-start':
        case 'right-end':
            return css`
                transform: translateY(-50%) rotate(90deg);
                top: 50%;
                right: calc(100% - 3px);
            `;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
            return css`
                transform: translateX(-50%) rotate(180deg);
                left: 50%;
                bottom: 100%;
            `;
        case 'left':
        case 'left-start':
        case 'left-end':
            return css`
                transform: translateY(-50%) rotate(270deg);
                top: 50%;
                left: calc(100% - 3px);
            `;
    }
};

export const PopoverStyled = styled('div')<Props>`
    position: absolute;
    z-index: 1000;
    transition: all 2ms ease-in-out;
    align-self: center;
    ${props => props.fullWidth && fullWidth()};
    ${props => props.fullHeight && fullHeight()};
    ${({ placement }) => getContainerMargin(placement)}
`;

export const PopoverBackground = styled('div')<Props>`
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const Rectangle = styled('div')<Props>`
    background-color: white;
    border-radius: 8px;
    ${({ placement }) => getRectangleShadow(placement)}
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
        width: 0;
        height: 0;
        z-index: 10;
        position: absolute;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid #fff;
        ${({ placement }) => getTriangleStyle(placement)}
        content: '';
    }
`;

export const Triangle = styled('div')<Props>``;

export const PopoverContent = styled('div')`
    padding: 15px 20px 15px 20px;
`;
