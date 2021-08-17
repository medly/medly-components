import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import * as TextFieldStyled from '../../TextField/Styled';
import InputSeparator from './InputSeparator';

export const Wrapper = styled(TextFieldStyled.InnerWrapper)<{ showChevronIcon: boolean; areCustomOptionsVisible: boolean }>`
    padding: ${({ showChevronIcon }) => (showChevronIcon ? '0 0.8rem 0' : '0 1.6rem 0 0.8rem')};
    ${SvgIcon}:first-of-type {
        margin-right: 0.8rem;
    }

    ${SvgIcon}:nth-of-type(2) {
        transition: transform 200ms ease-out;
        transform: ${({ areCustomOptionsVisible }) => areCustomOptionsVisible && 'rotate(180deg)'};
    }

    &:hover {
        ${InputSeparator} {
            border-color: ${({ theme, variant, isActive, disabled, isErrorPresent }) =>
                !disabled && !isActive && !isErrorPresent && theme.textField[variant].hover.borderColor};
        }
    }
`;
