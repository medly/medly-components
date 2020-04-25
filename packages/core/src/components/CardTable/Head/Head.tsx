import React, { SFC, useCallback, useState } from 'react';
import { SortOrder } from '../types';
import * as Styled from './Head.styled';
import HeadCell from './HeadCell';
import { Props } from './types';

export const Head: SFC<Props> = React.memo(({ onSort, columns, withWhiteBackground, defaultSortField, defaultSortOrder }) => {
    const [sortField, setSortField] = useState(defaultSortField);

    const handleSortChange = useCallback(
        (field: string, order: SortOrder) => {
            setSortField(field);
            onSort(field, order);
        },
        [onSort]
    );

    return (
        <thead>
            <Styled.HeadRow>
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
