import { fullWidth, getFontStyle } from '@medly-components/utils';
import styled from 'styled-components';
import FieldWithLabel from '../FieldWithLabel';
import { InputProps } from './types';

export const Wrapper = styled(FieldWithLabel.Field)<{
    fullWidth?: boolean;
}>`
    display: flex;
    &&& {
        flex-direction: row;
        align-items: center;
    }
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    border-radius: 5px;
    overflow: hidden;
    width: ${props => (props.fullWidth ? '100%' : 'max-content')};
    height: max-content;

    &:focus-within {
        border-color: ${({ theme }) => theme.input.focusedBorderColor};
    }

    & > * {
        ${getFontStyle}
        padding: ${({ theme }) => theme.spacing.S2};
        color: ${({ theme }) => theme.input.color};
    }
`;

export const Input = styled('input')<InputProps>`
    flex: 1;
    outline: 0;
    border: 0;
    ${fullWidth('16px')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    background-color: ${({ disabled, theme }) => (disabled ? theme.input.disabledBgcolor : theme.input.bgColor)};

    &::placeholder {
        color: ${({ theme }) => theme.input.placeHolderColor};
    }

    &::-webkit-file-upload-button {
        visibility: hidden;
    }
`;

export const Prefix = styled('span')`
    background-color: ${({ theme }) => theme.input.prefixAndSuffixBgColor};
`;

export const Suffix = styled('span')`
    background-color: ${({ theme }) => theme.input.prefixAndSuffixBgColor};
`;
