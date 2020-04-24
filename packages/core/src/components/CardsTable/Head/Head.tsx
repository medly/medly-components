import React, { SFC, useCallback, useState } from 'react';
import { SortOrder } from '../types';
import * as Styled from './Head.styled';
import HeadCell from './HeadCell';
import { Props } from './types';

export const Head: SFC<Props> = React.memo(({ onSort, columns }) => {
    const [sortField, setSortField] = useState('');

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
                    <HeadCell key={column.field} sortField={sortField} onSortChange={handleSortChange} column={column} />
                ))}
            </Styled.HeadRow>
        </thead>
    );
});
Head.displayName = 'Head';
