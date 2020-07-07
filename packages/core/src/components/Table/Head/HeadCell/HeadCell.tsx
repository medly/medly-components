import { ArrowDropDownIcon, ArrowDropUpIcon, DropdownIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Text from '../../../Text';
import { HeadCellButton, HeadCellStyled, ResizeHandler } from './HeadCell.styled';
import { HeadCellProps } from './types';

const HeadCell: React.FC<HeadCellProps> & WithStyle = React.memo(props => {
    let pageX: number;
    const {
        frozen,
        sortable,
        children,
        hidden,
        field,
        isLoading,
        sortField,
        onSortChange,
        defaultSortOrder,
        onWidthChange,
        columnMaxSize,
        ...restProps
    } = props;

    const cellEl = useRef(null),
        [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>(defaultSortOrder);

    useEffect(() => {
        if (sortField !== field) setSortState('none');
    }, [sortField]);

    useEffect(() => {
        cellEl && props.fitContent && onWidthChange(columnMaxSize, field);
    }, [columnMaxSize]);

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.getBoundingClientRect().left + (e.pageX - pageX + 2);
                onWidthChange && onWidthChange(width, field);
            }
        });
    };

    const handleSortIconClick = useCallback(() => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        onSortChange(field, order);
    }, [sortState, onSortChange, field]);

    const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        document.querySelector('body').style.cursor = 'auto';
    };

    const initResize = (e: React.MouseEvent) => {
        pageX = e.pageX;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        document.querySelector('body').style.cursor = 'ew-resize';
    };

    const handleDoubleClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            onWidthChange(columnMaxSize, field);
        },
        [columnMaxSize, field]
    );

    const sortIcon = useMemo(
        () =>
            sortField !== field ? (
                <DropdownIcon size="S" />
            ) : sortState === 'desc' ? (
                <ArrowDropDownIcon size="S" />
            ) : (
                <ArrowDropUpIcon size="S" />
            ),
        [sortField, field, sortState]
    );

    return (
        <HeadCellStyled as="th" ref={cellEl} frozen={frozen} hidden={hidden} {...restProps}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? (
                    <HeadCellButton onClick={handleSortIconClick} isSelected={sortField === field && !isLoading} withHoverEffect={sortable}>
                        <Text textVariant="h5" uppercase>
                            {c}
                        </Text>
                        {sortable && sortIcon}
                    </HeadCellButton>
                ) : (
                    c
                );
            })}
            <ResizeHandler onMouseDown={initResize} onDoubleClick={handleDoubleClick} />
        </HeadCellStyled>
    );
});

HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;

export default HeadCell;
