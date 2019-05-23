import { WithStyle } from '@medly-components/utils';
import React, { useRef } from 'react';
import { CellProps } from '../types';
import { CellStyled, ResizeHandlerStyled } from './Cell.styled';

const Cell: React.SFC<CellProps> & WithStyle = props => {
    const cellEl = useRef(null);
    let pageX: number;

    const onMouseMove = (e: MouseEvent) => {
        requestAnimationFrame(() => {
            if (cellEl.current) {
                const width = pageX - cellEl.current.offsetLeft + (e.pageX - pageX);
                if (props.handleWidthChange) {
                    props.handleWidthChange(width, props.title);
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
        <CellStyled ref={cellEl}>
            {props.children}
            {props.isHeadCell && <ResizeHandlerStyled onMouseDown={initResize} />}
        </CellStyled>
    );
};

Cell.displayName = 'Cell';
Cell.Style = CellStyled;

export default Cell;
