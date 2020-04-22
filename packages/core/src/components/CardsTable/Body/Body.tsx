import { WithStyle } from '@medly-components/utils';
import React, { SFC } from "react";
import * as Style from './Body.styled';
import Cell from './Cell';
import Row from './Row';
import { Props } from "./types";


export const Body: SFC<Props> & WithStyle= React.memo( props => {
    const { data, columns, onRowClick, rowClickDisableKey, uniqueKeyName, withLightTheme} = props;
    
    const handleRowClick = (rowData: any) => {
        return onRowClick && !rowData[rowClickDisableKey] ? () => onRowClick(rowData) : undefined;
    };

    return (
        <>
            {data.map((row, index) => {
                return (
                    <Row
                        key={index} 
                        flowDirection="horizontal" 
                        fullWidth 
                        withPadding={false} 
                        onClick={handleRowClick(row)}
                        disabled={row[rowClickDisableKey]}
                        withLightTheme={withLightTheme}
                        >
                        { columns.map(column => (
                            <Style.Column key={`${column.field}-${index}`} variant="flat" flowDirection="vertical" alignItems="left">
                               <Cell 
                                    isRowClickDisabled={row[rowClickDisableKey]}
                                    data={row[column.field]}
                                    column={column}
                                    rowId={row[uniqueKeyName]}
                               />
                            </Style.Column>
                        )) }
                    </Row>
                )})
            } 
        </>         
    )  
});

Body.displayName = 'Body';
