import { DownArrowIcon, DropDownIcon, UpArrowIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef, useState } from 'react';
import Text from '../../../Text';
import { HeadCellStyled, ResizeHandlerStyled } from './HeadCell.styled';
import { HeadCellProps } from './types';

const HeadCell: React.SFC<HeadCellProps> & WithStyle = props => {
    let pageX: number;
    const { frozen, enableSorting, children, hide, field, sortField, onSortChange, onWidthChange, maxColumnSizes } = props;

    const cellEl = useRef(null),
        [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>('none');

    useEffect(() => {
        if (sortField !== field) setSortState('none');
    }, [sortField]);

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.getBoundingClientRect().left + (e.pageX - pageX + 2);
                onWidthChange && onWidthChange(width, field);
            }
        });
    };

    const handleSortIconClick = () => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        onSortChange(field, order);
    };

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

    const handleDoubleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // @ts-ignore
        onWidthChange(maxColumnSizes[field], field);
    };

    const sortIcon =
        sortField !== field ? (
            <DropDownIcon size="XS" onClick={handleSortIconClick} />
        ) : sortState === 'desc' ? (
            <DownArrowIcon size="XS" onClick={handleSortIconClick} />
        ) : (
            <UpArrowIcon size="XS" onClick={handleSortIconClick} />
        );

    return (
        <HeadCellStyled ref={cellEl} frozen={frozen} hide={hide}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? (
                    <Text textWeight="Strong" textSize="M3">
                        {c}
                    </Text>
                ) : (
                    c
                );
            })}
            {enableSorting && sortIcon}
            <ResizeHandlerStyled onMouseDown={initResize} onDoubleClick={handleDoubleClick} />
        </HeadCellStyled>
    );
};

HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;

export default HeadCell;
