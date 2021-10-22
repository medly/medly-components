import { defaultTheme } from '@medly-components/theme';
import { fullWidth, getFontStyle } from '@medly-components/utils';
import styled from 'styled-components';
import { StyledInputProps, StyledLabelProps } from './types';

export const Input = styled('input').attrs({ type: 'file' })<StyledInputProps>`
    width: 1px;
    opacity: 0;
`;

export const Label = styled('label').attrs(({ theme: { input, font } }) => ({ input, font }))<StyledLabelProps>`
    ${getFontStyle}
    padding: ${({ theme }) => theme.spacing.S2};
    color: ${props => props.input.color};
    background-clip: padding-box;
    background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;

    &:focus {
        border-color: ${props => props.input.focusedBorderColor};
        outline: 0;
    }

    ${props => props.fullWidth && fullWidth()};
`;

Label.defaultProps = {
    theme: defaultTheme
};
