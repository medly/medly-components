import React, { SFC, useCallback, useState } from "react";
import Card from "../../Card";
import { Props } from "./types";
import { SortOrder } from "../types";
import Header from "./Header";


export const CardTableHeader: SFC<Props> = React.memo( props => {

    const { onSort, columns } = props;
    const [sortField, setSortField] = useState(''),
        handleSortChange = useCallback(
            (field: string, order: SortOrder) => {
                setSortField(field);
                onSort(field, order);
            },
            [onSort]
        );
    
    return (
        <Card flowDirection="horizontal" variant="flat" fullWidth >
            {columns.map((column, index) => {
                return (
                    <Header 
                        key={index}
                        sortField={sortField}
                        field={column.field}
                        onSortChange={handleSortChange}
                        enableSorting={column.sort}
                        title={column.title}
                    />
                )
            })}
        </Card>
    )   


});

CardTableHeader.displayName = 'CardTableHeader';
