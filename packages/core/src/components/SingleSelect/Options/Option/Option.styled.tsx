import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { OptionStyledProps } from './types';

export const OptionStyled = styled('li').attrs(({ theme: { select } }) => ({ ...select.options }))<OptionStyledProps>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    padding: 0 1.6rem;
    min-height: 4rem;
    display: flex;
    align-items: center;
    color: ${({ disabled, textColor, disableTextColor }) => (disabled ? disableTextColor : textColor)};
    background-color: ${({ bgColor }) => bgColor};

    &:hover {
        background-color: ${({ disabled, hoverBgColor, bgColor }) => (disabled ? bgColor : hoverBgColor)};
    }

    ${Text.Style} {
        flex: 1;
        user-select: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
