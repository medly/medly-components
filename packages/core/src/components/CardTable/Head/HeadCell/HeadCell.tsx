import { ChevronDownIcon, ChevronUpIcon, DropdownIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Text from '../../../Text';
import * as Styled from './HeadCell.styled';
import { Props } from './types';

export const HeadCell: FC<Props> & WithStyle = React.memo(({ defaultSortOrder, sortField, onSortChange, withWhiteBackground, column }) => {
    const { field, sortable, title, align } = column,
        [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>(defaultSortOrder);

    useEffect(() => {
        sortField !== field && setSortState('none');
    }, [sortField]);

    const handleSort = useCallback(() => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        onSortChange(field, order);
    }, [sortState, onSortChange, field]);

    const sortIcon = useMemo(
        () =>
            sortField !== field ? (
                <DropdownIcon size="S" />
            ) : sortState === 'desc' ? (
                <ChevronDownIcon size="M" />
            ) : (
                <ChevronUpIcon size="M" />
            ),
        [handleSort, sortField, field, sortState]
    );

    return (
        <Styled.HeadCell isActive={sortField === field} {...{ align, sortable, withWhiteBackground }}>
            <Styled.HeadCellContent onClick={sortable && handleSort}>
                <Text uppercase textVariant="h5">
                    {title}
                </Text>
                {sortable && sortIcon}
            </Styled.HeadCellContent>
        </Styled.HeadCell>
    );
});
HeadCell.defaultProps = {
    defaultSortOrder: 'none'
};
HeadCell.displayName = 'HeadCell';
HeadCell.Style = Styled.HeadCell;
