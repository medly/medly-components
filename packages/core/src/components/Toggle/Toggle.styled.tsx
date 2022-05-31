import { defaultTheme } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import styled from 'styled-components';
import FieldWithLabel from '../FieldWithLabel';
import { ToggleProps, ToggleWrapperProps } from './types';

const getHeight = ({ theme, size }: ToggleProps & WithThemeProp) =>
    size ? theme.toggle.sizes[size] : theme.toggle.sizes[theme?.toggle.defaultSize];
const getWidth = (props: ToggleProps & WithThemeProp) => `calc(${getHeight(props)} * 2)`;

export const Wrapper = styled(FieldWithLabel.Field)<ToggleWrapperProps>`
    position: relative;
    width: ${getWidth};
    height: ${getHeight};
    border-radius: 15px;
    background-color: ${({ theme }) => theme.toggle.bgColor};

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

export const Switch = styled('div')<ToggleWrapperProps>`
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
`;

export const OffIcon = styled('div')<ToggleWrapperProps>`
    color: ${({ theme }) => theme.toggle.iconColor};
    transition: 0.2s ease-in-out;
    position: absolute;
    right: 0;
    svg {
        height: ${props => `calc(${getHeight(props)} - 10px) `};
        path {
            fill: ${({ theme }) => theme.toggle.iconColor};
        }
    }
`;

export const OnIcon = styled('div')<ToggleWrapperProps>`
    color: ${({ theme }) => theme.toggle.iconColor};
    transition: 0.2s ease-in-out;
    opacity: 0;
    position: absolute;
    left: ${props => `calc((-${getHeight(props)}) + 3px) `};
    svg {
        height: ${props => `calc(${getHeight(props)} - 10px) `};
        path {
            fill: ${({ theme }) => theme.toggle.iconColor};
        }
    }
`;

export const Circle = styled('div')<ToggleWrapperProps>`
    z-index: 1;
    position: absolute;
    height: ${props => `calc(${getHeight(props)} - 6px) `};
    width: ${props => `calc(${getHeight(props)} - 6px) `};
    margin: 3px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
`;

Circle.defaultProps = {
    theme: defaultTheme
};

export const Checkbox = styled('input').attrs({ type: 'checkbox' })<ToggleProps>`
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
        & + ${Switch} {
            background: ${({ theme }) => theme.toggle.disabledBgColor};
        }
    }

    &:checked + ${Switch} {
        background: ${({ theme }) => theme.toggle.checkedBgColor};

        ${Circle} {
            margin-left: ${props => `calc((${getHeight(props)}) + 3px) `};
        }

        ${OffIcon} {
            color: ${({ theme }) => theme.toggle.iconColor};
            opacity: 0;
            right: ${props => `calc((-${getHeight(props)}) + 3px) `};
        }

        ${OnIcon} {
            opacity: 1;
            position: absolute;
            left: 0;
        }
    }
`;
