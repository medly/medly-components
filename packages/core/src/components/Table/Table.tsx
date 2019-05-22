import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import Cell from './Cell';
import { GroupCell, GroupCellTitle } from './GroupCell';
import Row from './Row';
import { TableStyled } from './Table.styled';
import { Props } from './types';

const Table: React.SFC<Props> & WithStyle = props => {
    const [columnConfig, setColumnConfig] = useState(
        props.columns.map(col => {
            const config = {
                key: col.title,
                field: col.field,
                size: 'minmax(150px, 1fr)',
                children: null
            };

            if (col.children) {
                config.children = col.children.map(child => ({ key: `${col.title}.${child.title}`, size: 'minmax(150px, 1fr)' }));
            }

            return config;
        })
    );

    const getTemplate = config => config.reduce((acc, curr) => `${acc} ${curr.size}`, ``);

    const handleWidthChange = (width, key) => {
        const temp = [...columnConfig];

        const keys = key.split('.');
        let column = temp.find(col => col.key === keys[0]);
        if (keys.length > 1) {
            column = column.children.find(col => col.key === key);
        }
        column.size = `minmax(${width}px, 1fr)`;
        setColumnConfig(temp);
    };

    const headCells = props.columns.map(col => {
        if (col.children) {
            return (
                <GroupCell gridTemplateColumns={getTemplate(columnConfig.find(config => config.key === col.title).children)}>
                    <GroupCellTitle>{col.title}</GroupCellTitle>
                    {col.children.map(child => (
                        <Cell key={child.title} title={`${col.title}.${child.title}`} handleWidthChange={handleWidthChange}>
                            {child.title}
                        </Cell>
                    ))}
                </GroupCell>
            );
        }

        return (
            <Cell key={col.title} title={col.title} handleWidthChange={handleWidthChange}>
                {col.title}
            </Cell>
        );
    });

    const rows = props.data.map((row, i) => {
        return (
            <Row key={i} gridTemplateColumns={columnConfig.reduce((acc, curr) => `${acc} ${curr.size}`, ``)}>
                {props.columns.map(col =>
                    col.children ? (
                        <GroupCell gridTemplateColumns={getTemplate(columnConfig.find(config => config.key === col.title).children)}>
                            {col.children.map(child => (
                                <Cell key={child.field}>{row[col.field][child.field]}</Cell>
                            ))}
                        </GroupCell>
                    ) : (
                        <Cell key={col.field}>{row[col.field]}</Cell>
                    )
                )}
            </Row>
        );
    });

    return (
        <TableStyled>
            <Row gridTemplateColumns={columnConfig.reduce((acc, curr) => `${acc} ${curr.size}`, ``)}>{headCells}</Row>
            {rows}
        </TableStyled>
    );
};

Table.displayName = 'Table';
Table.Style = TableStyled;

export default Table;
