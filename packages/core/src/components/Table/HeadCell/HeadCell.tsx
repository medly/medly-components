import { DownArrowIcon, DropDownIcon, UpArrowIcon } from '@medly-components/icons';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef, useState } from 'react';
import Text from '../../Text';
import { HeadCellProps } from '../types';
import { HeadCellStyled, ResizeHandlerStyled } from './HeadCell.styled';

const HeadCell: React.SFC<HeadCellProps> & WithStyle = props => {
    const [sortState, setSortState] = useState<'none' | 'asc' | 'desc'>('none');
    const cellEl = useRef(null);
    const { handleWidthChange, frozen, sort, children, field, sortedColumnField } = props;
    let pageX: number;

    useEffect(() => {
        if (sortedColumnField !== field) setSortState('none');
    }, [sortedColumnField]);

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.offsetLeft + (e.pageX - pageX);
                if (handleWidthChange) {
                    handleWidthChange(width, field);
                }
            }
        });
    };

    const handleSortIconClick = () => {
        const order = sortState === 'asc' ? 'desc' : 'asc';
        setSortState(order);
        props.handleSortIconClick(field, order);
    };

    const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    };

    const initResize = (e: React.MouseEvent) => {
        pageX = e.pageX;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    };

    const sortIcon =
        sortedColumnField !== field ? (
            <DropDownIcon size="XS" onClick={handleSortIconClick} />
        ) : sortState === 'desc' ? (
            <DownArrowIcon size="XS" onClick={handleSortIconClick} />
        ) : (
            <UpArrowIcon size="XS" onClick={handleSortIconClick} />
        );

    return (
        <HeadCellStyled ref={cellEl} frozen={frozen}>
            {React.Children.map(children, c => {
                return isValidStringOrNumber(c) ? (
                    <Text textWeight="Strong" textSize="M3">
                        {c}
                    </Text>
                ) : (
                    c
                );
            })}
            {sort && sortIcon}
            <ResizeHandlerStyled onMouseDown={initResize} />
        </HeadCellStyled>
    );
};

HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;

export default HeadCell;
