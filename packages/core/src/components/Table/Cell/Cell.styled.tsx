import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import { StyledProps } from './types';

const frozen = () => css`
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: inherit;

    * {
        z-index: 2;
    }
`;

export const Div = styled('div')``;

export const Cell = styled('div')<StyledProps>`
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    padding: ${({ hide }) => (hide ? '0' : '5px 0px 5px 10px')};
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-right: 1px solid ${({ theme }) => theme.table.borderColor};

    ${Checkbox.Style} {
        display: flex;
        margin: 0px;
        ${SvgIcon} {
            margin-right: 0px;
        }
    }

    ${Text.Style} {
        white-space: nowrap;
    }

    ${props => props.frozen && frozen()}
`;
