import { SvgIcon } from '@medly-components/icons';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import { CellStyled } from '../Cell/Cell.styled';

const frozen = () => css`
    z-index: 4;
`;

export const ResizeHandlerStyled = styled('span')`
    ${clearMarginPadding()};
    width: 3px;
    height: 100%;
    min-height: 25px;
    cursor: ew-resize;
`;

export const HeadCellStyled = styled(CellStyled)`
    padding: 0px;
    border-top: 1px solid gray;
    display: flex;
    align-items: center;
    text-overflow: initial;
    overflow: auto;
    white-space: normal;

    *:first-child {
        padding: 5px 0px 5px 10px;
        margin-right: auto;
    }

    ${SvgIcon} {
        cursor: pointer;
        margin-right: 5px;
    }

    ${props => props.frozen && frozen()}
`;
