import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import * as TextFieldStyled from '../../TextField/Styled';
import InputSeparator from './InputSeparator';

export const Wrapper = styled(TextFieldStyled.InnerWrapper)`
    padding-left: 0.8rem;
    ${SvgIcon} {
        margin-right: 0.8rem;
    }
    &:hover {
        ${InputSeparator} {
            border-color: ${({ theme, variant, isActive, disabled, isErrorPresent }) =>
                !disabled && !isActive && !isErrorPresent && theme.textField[variant].hover.borderColor};
        }
    }
`;
