import { ArrowDropDownIcon, ArrowDropUpIcon, DropdownIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Text from '../../../Text';
import { HeadCellButton, HeadCellStyled, ResizeHandler } from './HeadCell.styled';
import { HeadCellProps } from './types';

const HeadCell: React.FC<HeadCellProps> & WithStyle = React.memo(props => {
    let pageX: number;
    const {
        align,
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
        tableSize,
        hiddenDivRef,
        addColumnMaxSize,
        ...restProps
    } = props;

    const cellEl = useRef(null),
        [sortState, setSortState] = useState<'asc' | 'desc'>(defaultSortOrder);

    useEffect(() => {
        if (sortField !== field) setSortState('desc');
    }, [sortField]);

    useEffect(() => {
        cellEl && props.fitContent && onWidthChange(columnMaxSize, field);
    }, [columnMaxSize]);

    useEffect(() => {
        if (!isLoading && addColumnMaxSize && hiddenDivRef.current) {
            hiddenDivRef.current.innerHTML = children;
            const currentSize = hiddenDivRef.current.clientWidth;
            currentSize > 0 && addColumnMaxSize(field, currentSize + (tableSize === 'L' ? 72 : 56));
        }
    }, [children, isLoading, addColumnMaxSize, tableSize]);

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.getBoundingClientRect().left + (e.pageX - pageX + 2);
                onWidthChange && onWidthChange(width, field);
            }
        });
    };

    const handleSortIconClick = useCallback(() => {
        if (sortable && !isLoading) {
            const order = sortState === 'asc' ? 'desc' : 'asc';
            setSortState(order);
            onSortChange(field, order);
        }
    }, [isLoading, sortable, sortState, onSortChange, field]);

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
        <HeadCellStyled as="th" ref={cellEl} frozen={frozen} hidden={hidden} {...restProps} tableSize={tableSize}>
            {children && (
                <>
                    {React.Children.map(children, c => {
                        return isValidStringOrNumber(c) ? (
                            <HeadCellButton
                                align={align}
                                tableSize={tableSize}
                                onClick={handleSortIconClick}
                                isSelected={sortField === field && !isLoading}
                                withHoverEffect={sortable && !isLoading}
                            >
                                <Text uppercase>{c}</Text>
                                {sortable && sortIcon}
                            </HeadCellButton>
                        ) : (
                            c
                        );
                    })}
                    {!restProps.isRowActionCell && <ResizeHandler onMouseDown={initResize} onDoubleClick={handleDoubleClick} />}
                </>
            )}
        </HeadCellStyled>
    );
});

HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;

export default HeadCell;
