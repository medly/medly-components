import React, { FC, useCallback, useMemo, useState } from 'react';
import { SortOrder } from '../types';
import * as Styled from './Head.styled';
import HeadCell from './HeadCell';
import { Props } from './types';

export const Head: FC<Props> = React.memo(({ onSort, columns, withWhiteBackground, defaultSortField, defaultSortOrder }) => {
    const [sortField, setSortField] = useState(defaultSortField);

    const gridTemplateColumns = useMemo(() => columns.reduce((acc, curr) => acc.concat(`${curr.fraction || 1}fr `), ''), [columns]),
        handleSortChange = useCallback(
            (field: string, order: SortOrder) => {
                setSortField(field);
                onSort(field, order);
            },
            [onSort]
        );

    return (
        <thead>
            <Styled.HeadRow gridTemplateColumns={gridTemplateColumns}>
                {columns.map(column => (
                    <HeadCell
                        defaultSortOrder={defaultSortOrder}
                        key={column.field}
                        sortField={sortField}
                        onSortChange={handleSortChange}
                        column={column}
                        withWhiteBackground={withWhiteBackground}
                    />
                ))}
            </Styled.HeadRow>
        </thead>
    );
});
Head.defaultProps = {
    defaultSortField: ''
};
Head.displayName = 'Head';
