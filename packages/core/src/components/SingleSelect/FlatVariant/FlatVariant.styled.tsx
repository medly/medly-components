import { centerAligned, InjectClassName, styled } from '@medly-components/utils';
import { css } from '@medly-components/utils';
import { rgba } from 'polished';
import Label from '../../Label';
import { FlatVariantProps } from './types';

const getButtonStyle = ({
    theme,
    areOptionsVisible,
    errorText,
    state
}: FlatVariantProps & { state: 'default' | 'hovered' | 'pressed' | 'disabled' }) => {
    const { flat } = theme.singleSelect.variant;
    return css`
        color: ${errorText && state !== 'disabled' ? flat.valueColor['error'] : flat.valueColor[state]};
        background: ${areOptionsVisible ? flat.bgColor['activated'] : flat.bgColor[state]};
        * {
            fill: ${errorText && state !== 'disabled' ? flat.valueColor['error'] : flat.valueColor[state]};
        }
        ${Label.Style} {
            color: ${flat.labelColor[state]};
        }
    `;
};

const buttonStyle = (props: FlatVariantProps) => css`
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

export const OuterWrapper = styled('div')<{ fullWidth: boolean }>`
    position: relative;
    flex-direction: column;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'min-content')};
`;

export const HelperText = styled('span')<{ isError: boolean; disabled: boolean }>`
    color: ${({ isError, disabled, theme: { singleSelect } }) =>
        disabled
            ? singleSelect.variant.flat.labelColor.disabled
            : isError
            ? singleSelect.variant.flat.labelColor.error
            : singleSelect.variant.flat.labelColor.default};
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 0.8rem;
    white-space: initial;
    user-select: none;
`;

export const Suffix = styled(InjectClassName)<{ areOptionsVisible: boolean }>`
    pointer-events: none;
    transition: transform 200ms ease-out;
    transform: ${({ areOptionsVisible }) => (areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const FlatVariantStyled = styled('button')<FlatVariantProps>`
    border: none;
    position: relative;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    transition: all 100ms ease-out;
    padding: 0.7rem 0.4rem 0.9rem 0.8rem;
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: 0.8rem;

    * {
        transition: all 100ms ease-out;
    }

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${buttonStyle};

    ${centerAligned()}
`;
