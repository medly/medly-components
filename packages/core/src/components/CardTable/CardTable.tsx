import React, { SFC } from 'react';
import Body from './Body';
import * as Styled from './CardTable.styled';
import Head from './Head';
import { Props } from './types';

export const CardTable: SFC<Props> = React.memo(({ withWhiteBackground, onSort, columns, ...restProps }) => (
    <Styled.Table>
        <Head onSort={onSort} columns={columns} withWhiteBackground={withWhiteBackground} />
        <Body {...restProps} columns={columns} withWhiteBackground={withWhiteBackground} />
    </Styled.Table>
));

CardTable.displayName = 'CardTable';
CardTable.defaultProps = {
    withWhiteBackground: false
};
