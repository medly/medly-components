import { WithStyle } from '@medly-components/utils';
import React, { useRef } from 'react';
import { CellProps } from '../types';
import { HeadCellStyled, ResizeHandlerStyled } from './HeadCell.styled';

const HeadCell: React.SFC<CellProps> & WithStyle = props => {
    const cellEl = useRef(null);
    const { handleWidthChange, frozen, children, title } = props;
    let pageX: number;

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.offsetLeft + (e.pageX - pageX);
                if (handleWidthChange) {
                    handleWidthChange(width, title);
                }
            }
        });
    };

    const onMouseUp = (e: MouseEvent) => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    };

    const initResize = (e: React.MouseEvent) => {
        pageX = e.pageX;
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    };

    return (
        <HeadCellStyled ref={cellEl} frozen={frozen}>
            {children}
            <ResizeHandlerStyled onMouseDown={initResize} />
        </HeadCellStyled>
    );
};

HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;

export default HeadCell;
