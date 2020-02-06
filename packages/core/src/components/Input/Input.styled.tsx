import { fullWidth, styled } from '@medly-components/utils';
import FieldWithLabel from '../FieldWithLabel';
import { Props } from './types';

export const Wrapper = styled(FieldWithLabel.Field).attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<{
    fullWidth: boolean;
}>`
    display: flex;
    &&& {
        flex-direction: row;
    }
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 5px;
    overflow: hidden;
    width: ${props => (props.fullWidth ? '100%' : 'max-content')};
    height: max-content;

    &:focus-within {
        border-color: ${props => props.input.focusedBorderColor};
    }

    & > * {
        padding: ${({ theme }) => theme.spacing.S};
        font-size: ${({ font, text }) => font.sizes[text.defaults.textSize]};
        font-weight: ${({ font, text }) => font.weights[text.defaults.textWeight]};
        color: ${props => props.input.color};
    }
`;

export const Input = styled('input').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<Props>`
    flex: 1;
    outline: 0;
    border: 0;
    ${fullWidth('16px')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    background-color: ${({ disabled, input }) => (disabled ? input.disabledBgcolor : input.bgColor)};

    &::placeholder {
        color: ${props => props.input.placeHolderColor};
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
