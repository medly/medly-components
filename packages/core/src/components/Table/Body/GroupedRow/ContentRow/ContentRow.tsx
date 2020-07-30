import React, { useCallback, useContext } from 'react';
import { getGridTemplateColumns } from '../../../helpers';
import { TablePropsContext } from '../../../TableProps.context';
import Row from '../../Row';
import { BlankCell, ContentRowStyled, DataCell } from './ContentRow.styled';
import { Props } from './types';

export const ContentRow: React.FC<Props> = React.memo(props => {
    const { data, ...restProps } = props,
        tableProps = useContext(TablePropsContext),
        { columns, rowIdentifier } = tableProps;

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <>
            <ContentRowStyled {...restProps} onClick={stopPropagation} gridTemplateColumns={getGridTemplateColumns(columns)}>
                <BlankCell isRowExpanded={restProps.isRowExpanded} />
                <DataCell>
                    <TablePropsContext.Provider value={{ ...tableProps, columns: columns.slice(1) }}>
                        {data.children.map((row: { [k: string]: any }, index: number) => {
                            const identifier = row[rowIdentifier] || index;
                            return <Row key={identifier} {...{ ...props, id: identifier, data: row }} />;
                        })}
                    </TablePropsContext.Provider>
                </DataCell>
            </ContentRowStyled>
        </>
    );
});
ContentRow.displayName = 'ContentRow';
