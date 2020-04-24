import { ArrowDropDownIcon, ArrowDropUpIcon, DropdownIcon } from '@medly-components/icons/src';
import { WithStyle } from '@medly-components/utils/src';
import React, { SFC, useCallback, useEffect, useMemo, useState } from 'react';
import Text from '../../../Text';
import * as Styled from './HeadCell.styled';
import { Props } from './types';

export const HeadCell: SFC<Props> & WithStyle = React.memo(({ sortField, onSortChange, withWhiteBackground, column }) => {
    const { field, sort: isSortEnabled, title, align, flex } = column,
        [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>('none');

    useEffect(() => {
        sortField !== field && setSortState('none');
    }, [sortField]);

    const handleSortIconClick = useCallback(() => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        onSortChange(field, order);
    }, [sortState, onSortChange, field]);

    const sortIcon = useMemo(
        () =>
            sortField !== field ? (
                <DropdownIcon size="XS" onClick={handleSortIconClick} />
            ) : sortState === 'desc' ? (
                <ArrowDropDownIcon size="M" onClick={handleSortIconClick} />
            ) : (
                <ArrowDropUpIcon size="M" onClick={handleSortIconClick} />
            ),
        [handleSortIconClick, sortField, field, sortState]
    );

    return (
        <Styled.HeadCell flex={flex} align={align} withWhiteBackground={withWhiteBackground}>
            <Text textVariant="h5">{title}</Text>
            {isSortEnabled && sortIcon}
        </Styled.HeadCell>
    );
});
HeadCell.displayName = 'HeadCell';
HeadCell.Style = Styled.HeadCell;
