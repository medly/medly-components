import { defaultTheme } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import FieldWithLabel from '../FieldWithLabel';
import { ToggleProps, ToggleWrapperProps } from './types';

const getHeight = ({ theme, size }: ToggleProps & WithThemeProp) =>
    size ? theme.toggle.sizes[size] : theme.toggle.sizes[theme?.toggle.defaultSize];

const getWidth = (props: ToggleProps & WithThemeProp) => `calc(${getHeight(props)} * 1.75)`;

const IconStyle = css`
    color: ${({ theme }) => theme.toggle.iconColor};
    transition: 0.2s ease-in-out;
    position: absolute;
    svg {
        height: ${props => `calc(${getHeight(props)} - 1rem) `};
        path {
            fill: ${({ theme }) => theme.toggle.iconColor};
        }
    }
`;

export const Wrapper = styled(FieldWithLabel.Field)<ToggleWrapperProps>`
    position: relative;
    width: ${getWidth};
    height: ${getHeight};
    border-radius: 1.5rem;
    background-color: ${({ theme }) => theme.toggle.bgColor};

    &:focus-within {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.toggle.outlineColor};
    }

    & > * {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
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
    ${IconStyle}
    right: 0;
`;

export const OnIcon = styled('div')<ToggleWrapperProps>`
    ${IconStyle}
    opacity: 0;
    transform: translateX(${props => `calc(${getHeight(props)} * 0.75) `});
`;

export const Circle = styled('div')<ToggleWrapperProps>`
    z-index: 1;
    position: absolute;
    height: ${props => `calc(${getHeight(props)} - 0.8rem) `};
    width: ${props => `calc(${getHeight(props)} - 0.8rem) `};
    margin: 0.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0.1rem 0.3rem 0.3rem 0.1rem rgba(0, 0, 0, 0.2);
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
            transform: translateX(${props => `calc(${getHeight(props)} * 0.75) `});
        }

        ${OffIcon} {
            opacity: 0;
            color: ${({ theme }) => theme.toggle.iconColor};
            transform: translateX(${props => `calc(-${getHeight(props)} * 0.75) `});
        }

        ${OnIcon} {
            opacity: 1;
            position: absolute;
            transform: translateX(0);
        }
    }
`;
