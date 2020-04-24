import { ArrowDropDownIcon, ArrowDropUpIcon, DropdownIcon } from '@medly-components/icons/src';
import { WithStyle } from '@medly-components/utils/src';
import React, { SFC, useCallback, useEffect, useMemo, useState } from 'react';
import Card from '../../../Card';
import Text from '../../../Text';
import { HeadCellStyled } from './HeadCell.styled';
import { Props } from './types';

export const HeadCell: SFC<Props> & WithStyle = React.memo(props => {
    const { sortField, field, onSortChange, enableSorting, title, align } = props;

    const [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>('none');

    useEffect(() => {
        if (sortField !== field) setSortState('none');
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
        //TODO: Remove one head cell and use only one td
        <HeadCellStyled flowDirection="horizontal" variant="flat" fullWidth withPadding={false} title={title}>
            <Card key={field} variant="flat" alignItems={align || 'left'} withPadding={false}>
                <Text>
                    {title}
                    {enableSorting && sortIcon}
                </Text>
            </Card>
        </HeadCellStyled>
    );
});
HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;
