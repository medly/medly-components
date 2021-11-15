import { ChevronDownIcon, ChevronUpIcon, DropdownIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Text from '../../../Text';
import * as Styled from './HeadCell.styled';
import { Props } from './types';
import type { FC } from 'react';

export const Component: FC<Props> = memo(({ defaultSortOrder, sortField, onSortChange, withWhiteBackground, column }) => {
    const { field, sortable, title, align } = column,
        [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>(defaultSortOrder!);

    useEffect(() => {
        sortField !== field && setSortState('none');
    }, [sortField]);

    const handleSort = useCallback(() => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        onSortChange && onSortChange(field, order);
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
            <Styled.HeadCellContent onClick={sortable ? handleSort : undefined}>
                <Text uppercase textVariant="h5">
                    {title}
                </Text>
                {sortable && sortIcon}
            </Styled.HeadCellContent>
        </Styled.HeadCell>
    );
});
Component.defaultProps = {
    defaultSortOrder: 'none'
};
Component.displayName = 'HeadCell';

export const HeadCell: FC<Props> & WithStyle = Object.assign(Component, { Style: Styled.HeadCell });
