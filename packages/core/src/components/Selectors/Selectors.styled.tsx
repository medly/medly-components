import { css, styled } from '@medly-components/utils';
import Text from '../Text';
import {
    SelectorGroupOptionsProps,
    SelectorGroupWrapperProps,
    SelectorHelperTextProps,
    SelectorLabelPositionStyleProps,
    SelectorLabelProps
} from './types';

export const SelectorGroupWrapper = styled('div')<SelectorGroupWrapperProps>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    flex-direction: column;
    align-items: flex-start;

    & > :first-child {
        margin-bottom: ${({ hasHelperOrErrorText }) => !hasHelperOrErrorText && '0.9rem'};
    }
`;

export const asterisk = ({ hasError, theme, type }: SelectorLabelProps) => css`
    ::after {
        content: ' *';
        color: ${hasError ? theme[type].helperTextColor.error : theme[type].labelColor};
    }
`;

export const SelectorLabel = styled(Text)<SelectorLabelProps>`
    user-select: none;
    ${({ required }) => required && asterisk}
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    color: ${({ disabled, theme, type }) => theme[type].labelColor[disabled ? 'disabled' : 'default']};
    padding: ${({ labelPosition, theme, type }) => labelPosition && (theme[type].labelPadding[ labelPosition === 'bottom' ? 'bottomPositioned' : labelPosition === 'top'? 'topPositioned' : labelPosition === 'right' ? 'rightPositioned' : 'leftPositioned' ])};
`;

export const SelectorGroupOptions = styled('div')<SelectorGroupOptionsProps>`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr) `};
    margin-left: ${({ isIndented }) => isIndented && '4rem'};

    ${({ fullWidthOptions, isIndented }) =>
        fullWidthOptions &&
        css`
            width: 100%;
            margin-left: 0;
            > label {
                padding-left: ${isIndented && '5rem'};
            }
        `};
`;
SelectorGroupOptions.defaultProps = {
    columns: 1,
    isIndented: false
};

export const SelectorHelperText = styled('span')<SelectorHelperTextProps>`
    white-space: initial;
    font-size: ${({ hasError }) => (hasError ? '1.2rem' : '1.4rem')};
    line-height: ${({ hasError }) => (hasError ? '1.6rem' : '2.2rem')};
    margin-left: ${({ isIndented }) => isIndented && '4rem'};
    margin-top: ${({ hasError }) => !hasError && '0.3rem'};
    margin-bottom: ${({ hasError }) => (hasError ? '1.3rem' : '1.8rem')};
    color: ${({ hasError, theme, disabled, type }) => theme[type].helperTextColor[disabled ? 'disabled' : hasError ? 'error' : 'default']};
`;

export const getSelectorLabelPositionStyle = ({ labelPosition, fullWidth }: SelectorLabelPositionStyleProps) => {
    switch (labelPosition) {
        case 'top':
            return css`
                padding: ${fullWidth ? '0.8rem 0' : '0.8rem'};
                flex-direction: column;
                justify-content: center;
            `;
        case 'bottom':
            return css`
                padding: ${fullWidth ? '0.8rem 0' : '0.8rem'};
                justify-content: center;
                flex-direction: column-reverse;
            `;
        case 'left':
            return css`
                padding: 0.8rem 0;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
            `;
        case 'right':
        default:
            return css`
                padding: 0.8rem 0;
                align-items: center;
                justify-content: flex-end;
                flex-direction: row-reverse;
            `;
    }
};

export const SelectorGroup = {
    Wrapper: SelectorGroupWrapper,
    Label: SelectorLabel,
    HelperText: SelectorHelperText,
    Options: SelectorGroupOptions
};
