import { centerAligned, InjectClassName, styled } from '@medly-components/utils';
import { css } from '@medly-components/utils';
import { rgba } from 'polished';
import Label from '../../Label';
import { FlatVariantProps } from './types';

const getButtonStyle = (
    valueColor: string,
    labelColor: string,
    errorColor: string,
    activatedColor: string,
    bgColor: string,
    areOptionsVisible: boolean,
    errorText: string
) => css`
    color: ${errorText ? errorColor : valueColor};
    background: ${areOptionsVisible ? activatedColor : bgColor};
    * {
        fill: ${errorText ? errorColor : valueColor};
    }
    ${Label.Style} {
        color: ${labelColor};
    }
`;

const buttonStyle = ({ theme, areOptionsVisible, errorText }: FlatVariantProps) => {
    const { bgColor, labelColor, valueColor } = theme.singleSelect.variant.flat;
    return css`
        &:disabled {
            ${getButtonStyle(
                valueColor.disabled,
                labelColor.disabled,
                valueColor.error,
                bgColor.activated,
                bgColor.disabled,
                areOptionsVisible,
                errorText
            )}
        }

        &:not(:disabled) {
            &:not(:hover) {
                ${getButtonStyle(
                    valueColor.default,
                    labelColor.default,
                    valueColor.error,
                    bgColor.activated,
                    bgColor.default,
                    areOptionsVisible,
                    errorText
                )}
            }
            &:active {
                ${getButtonStyle(
                    valueColor.pressed,
                    labelColor.pressed,
                    valueColor.error,
                    bgColor.activated,
                    bgColor.pressed,
                    areOptionsVisible,
                    errorText
                )}
            }
            &:not(:active):hover {
                ${getButtonStyle(
                    valueColor.hovered,
                    labelColor.hovered,
                    valueColor.error,
                    bgColor.activated,
                    bgColor.hovered,
                    areOptionsVisible,
                    errorText
                )}
                box-shadow: 0 0.2rem 0.8rem ${rgba(bgColor.hovered, 0.35)};
            }
        }
    `;
};

export const OuterWrapper = styled('div')<{ fullWidth: boolean }>`
    position: relative;
    flex-direction: column;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'min-content')};
`;

export const HelperText = styled('span')<{ isError: boolean; textColor: string }>`
    color: ${({ textColor }) => textColor};
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
