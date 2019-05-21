import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { CellStyled } from './Cell.styled';

const Cell: React.SFC & WithStyle = React.memo(props => <CellStyled>{props.children}</CellStyled>);

Cell.displayName = 'Cell';
Cell.Style = CellStyled;

export default Cell;
