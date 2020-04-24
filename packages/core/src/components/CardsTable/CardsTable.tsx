import React, { SFC } from 'react';
import Body from './Body';
import * as Styled from './CardTable.styled';
import Head from './Head';
import { Props } from './types';

export const CardsTable: SFC<Props> = React.memo(({ onSort, columns, ...restProps }) => (
    <Styled.Table>
        <Head onSort={onSort} columns={columns} />
        <Body {...restProps} columns={columns} />
    </Styled.Table>
));

CardsTable.displayName = 'CardsTable';
CardsTable.defaultProps = {
    withLightTheme: false
};
