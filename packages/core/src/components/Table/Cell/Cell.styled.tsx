import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import { Props } from './types';

const frozen = () => css`
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: inherit;
`;

export const CellStyled = styled('div')<Props>`
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    padding: ${({ hide }) => (hide ? '0' : '5px 0px 5px 10px')};
    position: relative;
    display: flex;
    align-items: center;

    ${Checkbox.Style} {
        display: flex;
        margin: 0px;
        ${SvgIcon} {
            margin-right: 0px;
        }
    }

    ${Text.Style} {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    ${props => props.frozen && frozen()}
`;
