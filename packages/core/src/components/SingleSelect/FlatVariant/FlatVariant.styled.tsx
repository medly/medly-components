import { css, InjectClassName, styled, WithThemeProp } from '@medly-components/utils';
import { rgba } from 'polished';
import Label from '../../Label';
import { StyledFlatVariantProps } from './types';

const getButtonStyle = ({
    theme,
    areOptionsVisible,
    errorText,
    state
}: StyledFlatVariantProps & WithThemeProp & { state: 'default' | 'hovered' | 'pressed' | 'disabled' }) => {
    const { valueColor, labelColor, bgColor } = theme.singleSelect.variant.flat;
    const disabled = state === 'disabled';
    return css`
        color: ${valueColor[disabled ? 'disabled' : errorText ? 'error' : state]};
        background: ${bgColor[areOptionsVisible ? 'activated' : state]};
        * {
            fill: ${valueColor[disabled ? 'disabled' : errorText ? 'error' : state]};
        }
        ${Label.Style} {
            color: ${labelColor[state]};
        }
    `;
};

const buttonStyle = (props: StyledFlatVariantProps & WithThemeProp) => css`
    &:disabled {
        ${getButtonStyle({ ...props, state: 'disabled' })}
    }
    &:not(:disabled) {
        &:not(:hover) {
            ${getButtonStyle({ ...props, state: 'default' })}
        }
        &:active {
            ${getButtonStyle({ ...props, state: 'pressed' })}
        }
        &:not(:active):hover {
            ${getButtonStyle({ ...props, state: 'hovered' })}
            box-shadow: 0 0.2rem 0.8rem ${rgba(props.theme.singleSelect.variant.flat.bgColor.hovered, 0.35)};
        }
    }
`;

export const OuterWrapper = styled('div')`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
`;

export const HelperText = styled('span')<{ isError?: boolean; disabled?: boolean }>`
    color: ${({ isError, disabled, theme }) =>
        theme.singleSelect.variant.flat.labelColor[disabled ? 'disabled' : isError ? 'error' : 'default']};
    font-size: 1rem;
    line-height: 1.6rem;
    margin: 0.5rem 0.8rem 0;
    white-space: initial;
    user-select: none;
`;

export const Suffix = styled(InjectClassName)<{ areOptionsVisible?: boolean }>`
    pointer-events: none;
    transition: transform 200ms ease-out;
    transform: ${({ areOptionsVisible }) => (areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const FlatVariantStyled = styled('button').attrs({ type: 'button' })<StyledFlatVariantProps>`
    border: none;
    position: relative;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    height: ${({ theme }) => theme.singleSelect.variant.flat.height};
    padding: 0.7rem 0.4rem 0.9rem 0.8rem;
    width: '100%';
    border-radius: ${({ theme }) => theme.singleSelect.options.borderRadius.flat};
    &,
    * {
        cursor: pointer;
    }
    &,
    ${Label.Style} {
        transition: all 100ms ease-out;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        &,
        * {
            cursor: not-allowed;
        }
    }

    ${buttonStyle};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
