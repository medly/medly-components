import React, { SFC } from 'react';
import Body from './Body';
import Head from './Head';
import { Props } from './types';

export const CardsTable: SFC<Props> = React.memo(({ onSort, columns, ...restProps }) => (
    // TODO: Change Card to Table
    <>
        <Head onSort={onSort} columns={columns} />
        <Body {...restProps} columns={columns} />
    </>
));

CardsTable.displayName = 'CardsTable';
CardsTable.defaultProps = {
    withLightTheme: false
};
