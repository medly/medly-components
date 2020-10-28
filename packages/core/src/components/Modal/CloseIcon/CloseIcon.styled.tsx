import { ClearIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';

const getStyle = ({ styleType }: { styleType: 'default' | 'hovered' | 'pressed' }) => css`
    border: 1px solid ${({ theme }) => theme.modal.closeIcon.borderColor[styleType]};
    background-color: ${({ theme }) => theme.modal.closeIcon.bgColor[styleType]};
    * {
        fill: ${({ theme }) => theme.modal.closeIcon.color[styleType]};
    }
`;

export const CloseIcon = styled(ClearIcon)`
    /* translate 3d fixes a bug where the close icon does not appear during the popup animation */
    transform: translate3d(0, 0, 0);
    height: 4rem;
    width: 4rem;
    padding: 1rem;
    top: 1.6rem;
    right: 1.6rem;
    z-index: 20;
    position: absolute;
    border-radius: ${({ theme }) => theme.modal.closeIcon.borderRadius};
    &,
    & > * {
        transition: all 100ms ease-out;
    }
    box-sizing: border-box;

    ${props => getStyle({ ...props, styleType: 'default' })}

    &:hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        box-shadow:  0 2px 8px ${({ theme }) => rgba(theme.modal.closeIcon.bgColor.hovered, 0.5)}
    }

    &:active {
        ${props => getStyle({ ...props, styleType: 'pressed' })}
        box-shadow: none;
    }

    @media (min-width: 768px) {
        top: 1.2rem;
        right: 1.2rem;
        height: 3.2rem;
        width: 3.2rem;
        padding: 0.4rem;
    }
`;
