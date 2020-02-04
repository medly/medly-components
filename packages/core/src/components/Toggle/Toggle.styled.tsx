import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { Props, ToggleWrapperProps } from './types';

const getHeight = ({ theme, size }: Props) => (size ? theme.toggle.sizes[size] : theme.toggle.sizes[theme.toggle.defaultSize]);
const getWidth = (props: Props) => `calc(${getHeight(props)} * 2)`;

export const Wrapper = styled('div')<ToggleWrapperProps>`
    position: relative;
    width: ${getWidth};
    height: ${getHeight};
    border-radius: 15px;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.toggle.outlineColor};
    }

    & > * {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
`;
Wrapper.defaultProps = {
    theme: defaultTheme
};

export const Circle = styled('div')<ToggleWrapperProps>`
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.toggle.bgColor};

    &::after {
        content: '';
        margin: 3px;
        display: block;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.white};
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
        width: ${props => `calc(${getHeight(props)} - 6px)`};
        height: ${props => `calc(${getHeight(props)} - 6px)`};
    }
`;
Circle.defaultProps = {
    theme: defaultTheme
};

export const Checkbox = styled('input').attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    z-index: 2;
    margin: 0;
    position: absolute;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        & + ${Circle} {
            background: ${({ theme }) => theme.toggle.disabledBgColor};
        }
    }

    &:checked + ${Circle} {
        background: ${({ theme }) => theme.toggle.checkedBgColor};
        &::after {
            margin-left: ${props => `calc(${getWidth(props)} - (${getHeight(props)}) + 3px)`};
        }
    }
`;
