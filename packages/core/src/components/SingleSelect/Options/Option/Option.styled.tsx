import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { OptionStyledProps } from './types';

export const OptionStyled = styled('li').attrs(({ theme: { select } }) => ({ ...select.option }))<OptionStyledProps>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 0 1.6rem;
    min-height: 4rem;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${({ disabled, selected, hasError, bgColor }) =>
        bgColor[!disabled && selected ? (hasError ? 'error' : 'selected') : 'default']};

    &:hover {
        background-color: ${({ disabled, selected, bgColor }) => !disabled && !selected && bgColor.hovered};
    }

    & > ${Text.Style} {
        flex: 1;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${({ disabled, selected, hasError, textColor }) => textColor[disabled ? 'disabled' : selected ? (hasError ? 'error' : 'selected') : 'default']};
    }

    ${SvgIcon} {
        margin-left: 1.6rem;
        * {
            fill: ${({ disabled, textColor }) => textColor[disabled ? 'disabled' : 'default']};
        }
    }
`;
