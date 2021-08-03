import React, { FC } from 'react';
import Body from './Body';
import * as Styled from './CardTable.styled';
import Head from './Head';
import { CardTableProps } from './types';

export const CardTable: FC<CardTableProps> = React.memo(
    ({ withWhiteBackground, defaultSortField, defaultSortOrder, onSort, columns, ...restProps }) => (
        <Styled.Table>
            <Head {...{ defaultSortField, defaultSortOrder, onSort, columns, withWhiteBackground }} />
            <Body {...{ columns, withWhiteBackground, ...restProps }} />
        </Styled.Table>
    )
);

CardTable.displayName = 'CardTable';
CardTable.defaultProps = {
    withWhiteBackground: false
};
