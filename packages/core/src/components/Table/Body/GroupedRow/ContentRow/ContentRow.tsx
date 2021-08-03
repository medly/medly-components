import React, { useCallback, useContext } from 'react';
import { TableComponentsCommonPropsContext } from '../../../context';
import Row from '../../Row';
import { BlankCell, ContentRowStyled, DataCell } from './ContentRow.styled';
import { ContentRowProps } from './types';

export const ContentRow: React.FC<ContentRowProps> = React.memo(props => {
    const { data, ...restProps } = props,
        { rowIdentifier, size } = useContext(TableComponentsCommonPropsContext);

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <ContentRowStyled tableSize={size} isRowExpanded={restProps.isRowExpanded} onClick={stopPropagation}>
            <BlankCell isRowExpanded={restProps.isRowExpanded} />
            <DataCell>
                {data.map((row: { [k: string]: any }, index: number) => {
                    const identifier = row[rowIdentifier] || index;
                    return <Row key={identifier} {...{ ...props, id: identifier, data: row }} />;
                })}
            </DataCell>
        </ContentRowStyled>
    );
});
ContentRow.displayName = 'ContentRow';
