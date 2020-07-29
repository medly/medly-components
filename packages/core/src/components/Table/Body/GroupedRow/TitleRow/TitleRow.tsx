import React, { useContext } from 'react';
import { getGridTemplateColumns } from '../../../helpers';
import { TablePropsContext } from '../../../TableProps.context';
import RowActionsCell from '../../Cell/RowActionsCell';
import { Row, TitleCell } from './TitleRow.styled';
import { Props } from './types';

export const TitleRow: React.FC<Props> = React.memo(props => {
    const { data, isRowExpanded, onClick, ...restProps } = props,
        { columns, groupBy, isLoading, isRowSelectable, isRowExpandable, showRowWithCardStyle, size: tableSize } = useContext(
            TablePropsContext
        );

    return (
        <Row
            {...restProps}
            onClick={onClick}
            showRowWithCardStyle={showRowWithCardStyle}
            gridTemplateColumns={getGridTemplateColumns(columns)}
        >
            <RowActionsCell
                isRowExpandable
                tableSize={tableSize}
                isLoading={isLoading}
                isRowExpanded={isRowExpanded}
                onRowExpansionIconClick={onClick}
            />
            {(isRowSelectable || isRowExpandable) && (
                <RowActionsCell isRowSelectable={isRowSelectable} tableSize={tableSize} isLoading={isLoading} />
            )}
            <TitleCell tableSize={tableSize}>{`${data[groupBy]} ${data.count}`}</TitleCell>
        </Row>
    );
});
TitleRow.displayName = 'TitleRow';
