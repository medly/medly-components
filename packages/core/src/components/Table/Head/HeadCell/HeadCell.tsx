import { WithStyle } from '@medly-components/utils';
import React, { useRef } from 'react';
import { HeadCellStyled, ResizeHandlerStyled } from './HeadCell.styled';

const HeadCell: React.SFC & WithStyle = React.memo(props => {
    const cellEl = useRef(null);
    let pageX: number;

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.offsetLeft + (e.pageX - pageX);
                props.handleWidthChange(width, props.title);
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
        <HeadCellStyled ref={cellEl}>
            {props.children}
            <ResizeHandlerStyled onMouseDown={initResize} />
        </HeadCellStyled>
    );
});

HeadCell.displayName = 'HeadCell';
HeadCell.Style = HeadCellStyled;

export default HeadCell;
