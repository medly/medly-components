import { SvgIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import Checkbox from '../../Checkbox';
import { Props } from './types';

const frozen = () => css`
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: inherit;
`;

export const CellStyled = styled('div')<Props>`
    opacity: ${({ hide }) => (hide ? 0 : 1)};
    padding: 5px 0px 5px 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;

    ${Checkbox.Style} {
        display: flex;
        margin: 0px;

        ${SvgIcon} {
            margin-right: 0px;
        }
    }

    ${props => props.frozen && frozen()}
`;
