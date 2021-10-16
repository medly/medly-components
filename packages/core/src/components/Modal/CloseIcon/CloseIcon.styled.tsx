import { ClearIcon } from '@medly-components/icons';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';

const getStyle = ({ styleType }: { styleType: 'default' | 'hovered' | 'pressed' }) => css`
    background-color: ${({ theme }) => theme.modal.closeIcon.bgColor[styleType]};
    * {
        fill: ${({ theme }) => theme.modal.closeIcon.color[styleType]};
    }
`;

export const CloseIcon = styled(ClearIcon)`
    /* the translate 3d, perspective, and backface-visibility properties fix a bug where the close icon does not appear during the popup animation */
    transform: translate3d(0, 0, 0);
    perspective: 1000;
    backface-visibility: hidden;
    top: 1.4rem;
    right: 1.4rem;
    z-index: 20;
    position: absolute;
    border-radius: ${({ theme }) => theme.modal.closeIcon.borderRadius};
    border: ${({ theme }) => theme.modal.closeIcon.border};

    ${props => getStyle({ ...props, styleType: 'default' })}

    &:hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        box-shadow:  0 2px 8px ${({ theme }) => rgba(theme.modal.closeIcon.bgColor.hovered, 0.5)}
    }

    &:active {
        ${props => getStyle({ ...props, styleType: 'pressed' })}
        box-shadow: none;
    }
`;
