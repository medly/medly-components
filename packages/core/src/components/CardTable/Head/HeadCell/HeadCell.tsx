import { ArrowDropDownIcon, ArrowDropUpIcon, DropdownIcon } from '@medly-components/icons/src';
import { WithStyle } from '@medly-components/utils/src';
import React, { SFC, useCallback, useEffect, useMemo, useState } from 'react';
import Text from '../../../Text';
import * as Styled from './HeadCell.styled';
import { Props } from './types';

export const HeadCell: SFC<Props> & WithStyle = React.memo(({ defaultSortOrder, sortField, onSortChange, withWhiteBackground, column }) => {
    const { field, sort: isSortEnabled, title, align, flex } = column,
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
                <DropdownIcon size="XS" />
            ) : sortState === 'desc' ? (
                <ArrowDropDownIcon size="M" />
            ) : (
                <ArrowDropUpIcon size="M" />
            ),
        [handleSort, sortField, field, sortState]
    );

    return (
        <Styled.HeadCell isActive={sortField === field} {...{ flex, align, isSortEnabled, withWhiteBackground }}>
            <Styled.HeadCellContent onClick={isSortEnabled && handleSort}>
                <Text uppercase textVariant="h5">
                    {title}
                </Text>
                {isSortEnabled && sortIcon}
            </Styled.HeadCellContent>
        </Styled.HeadCell>
    );
});
HeadCell.defaultProps = {
    defaultSortOrder: 'none'
};
HeadCell.displayName = 'HeadCell';
HeadCell.Style = Styled.HeadCell;
