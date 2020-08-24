import { ClearIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';

const getStyle = ({ styleType }: { styleType: 'default' | 'hovered' | 'pressed' }) => css`
    background-color: ${({ theme }) => theme.modal.closeIcon.bgColor[styleType]};
    * {
        fill: ${({ theme }) => theme.modal.closeIcon.color[styleType]};
    }
`;

export const CloseIcon = styled(ClearIcon)`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    border-radius: ${({ theme }) => theme.modal.closeIcon.borderRadius};
    padding: 4px;
    &,
    & > * {
        transition: all 100ms ease-out;
    }

    ${props => getStyle({ ...props, styleType: 'default' })}

    &:hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
    }

    &:active {
        ${props => getStyle({ ...props, styleType: 'pressed' })}
    }
`;
