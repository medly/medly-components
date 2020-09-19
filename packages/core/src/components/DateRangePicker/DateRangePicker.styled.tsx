import { centerAligned, styled } from '@medly-components/utils';
import TextField from '../TextField';
import * as TextFieldStyled from '../TextField/Styled';

export const Wrapper = styled.div`
    cursor: pointer;
    border: 1px solid #98a7b7;
    border-radius: 4px;
    overflow: hidden;
`;

export const InputWrapperContainer = styled.div`
    display: flex;
    ${centerAligned('flex')}
    flex-direction: row;
`;

export const InputSeparator = styled.i`
    border-right: 1px solid #c7d0d8;
    height: 45%;
    width: 1px;
`;

export const OuterWrapper = styled(TextFieldStyled.OuterWrapper)`
    min-width: 338px;
`;

export const InnerWrapper = styled(TextFieldStyled.InnerWrapper)`
    padding: 0;
    ${TextField.Style} {
        ${TextFieldStyled.InnerWrapper} {
            background-color: transparent;
        }
    }
`;

export const Input = styled(TextFieldStyled.Input)`
    padding: 0 16px 8px 16px;
    &:not(:placeholder-shown) + ${TextFieldStyled.Label}, &:focus + ${TextFieldStyled.Label} {
        padding-left: 20px;
    }
`;

export const Label = styled(TextFieldStyled.Label)`
    padding-left: 16px;
`;
