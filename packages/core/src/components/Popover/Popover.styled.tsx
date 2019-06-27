import { css, fullHeight, fullWidth, styled } from '@medly-components/utils';
import { Placement, PopoverProps, PopoverWrapperProps } from './types';

const getPosition = (position: Placement) => {
    switch (position) {
        case 'top-start':
            return css`
                bottom: calc(100% + 5px);
                left: 0%;
            `;
        case 'top':
            return css`
                bottom: calc(100% + 5px);
                align-self: center;
            `;
        case 'top-end':
            return css`
                bottom: calc(100% + 5px);
                right: 0%;
            `;
        case 'right-start':
            return css`
                top: 0%;
                left: calc(100% + 5px);
            `;
        case 'right':
            return css`
                left: calc(100% + 5px);
                align-self: center;
            `;
        case 'right-end':
            return css`
                bottom: 0px;
                left: calc(100% + 5px);
            `;
        case 'bottom-start':
            return css`
                top: calc(100% + 5px);
                left: 0%;
            `;
        case 'bottom':
            return css`
                top: calc(100% + 5px);
                align-self: center;
            `;
        case 'bottom-end':
            return css`
                top: calc(100% + 5px);
                right: 0%;
            `;
        case 'left-start':
            return css`
                right: calc(100% + 5px);
                top: 0%;
            `;
        case 'left':
            return css`
                right: calc(100% + 5px);
                align-self: center;
            `;
        case 'left-end':
            return css`
                right: calc(100% + 5px);
                bottom: 0%;
            `;
    }
};

export const PopoverStyled = styled('div')<PopoverProps>`
    position: absolute;
    display: none;
    transition: all 2ms ease-in-out;
    border-radius: 4px;

    ${props => props.fullWidth && fullWidth()};
    ${props => props.fullHeight && fullHeight()};
`;

const getFlexDirection = (position: Placement) => {
    switch (position) {
        case 'top-start':
        case 'top':
        case 'top-end':
            return css`
                flex-direction: column;
            `;
        case 'right-start':
        case 'right':
        case 'right-end':
            return css`
                flex-direction: row;
            `;
        case 'bottom-start':
        case 'bottom':
        case 'bottom-end':
            return css`
                flex-direction: column-reverse;
            `;
        case 'left-start':
        case 'left':
        case 'left-end':
            return css`
                flex-direction: row-reverse;
            `;
    }
};

export const PopoverWrapperStyled = styled('div')<PopoverWrapperProps>`
    display: inline-flex;
    position: relative;

    ${({ placement }) => getFlexDirection(placement)}

    ${PopoverStyled} {
        ${({ placement }) => getPosition(placement)}
    }

    ${({ interactionType }) => {
        if (interactionType === 'hover') {
            return css`
                &:hover {
                    ${PopoverStyled} {
                        display: block;
                    }
                }
            `;
        }
    }}
`;
