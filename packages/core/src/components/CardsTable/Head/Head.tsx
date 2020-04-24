import React, { SFC, useCallback, useState } from 'react';
import Card from '../../Card';
import { SortOrder } from '../types';
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
        // TODO: Change Card to TH
        <Card flowDirection="horizontal" variant="flat" fullWidth withPadding={false}>
            {columns.map(column => {
                return (
                    // TODO: pass column config directly
                    <HeadCell
                        key={column.field}
                        sortField={sortField}
                        field={column.field}
                        onSortChange={handleSortChange}
                        enableSorting={column.sort}
                        title={column.title}
                        align={column.align}
                    />
                );
            })}
        </Card>
    );
});
Head.displayName = 'Head';
