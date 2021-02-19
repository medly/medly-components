import React, { useContext } from 'react';
import { TableComponentsCommonPropsContext } from '../context';
import Minimap from '../Minimap';
import { TBody } from './Body.styled';
import GroupedRow from './GroupedRow';
import Row from './Row';
import { NoResultCell, NoResultRow } from './Row/Row.styled';
import { Props } from './types';

const Body: React.FC<Props> = React.memo(props => {
    const { data, groupBy, rowIdentifier, showRowWithCardStyle, noResultRow, tableRef, withMinimap } = useContext(
            TableComponentsCommonPropsContext
        ),
        { selectedRowIds, onRowSelection, onGroupedRowSelection, setUniqueIds, ...restProps } = props;

    return (
        <TBody>
            {data.length === 0 &&
                (noResultRow ? (
                    noResultRow
                ) : (
                    <NoResultRow showRowWithCardStyle={showRowWithCardStyle}>
                        <NoResultCell>No result</NoResultCell>
                    </NoResultRow>
                ))}
            {data.map((row, index) => {
                const identifier = (groupBy ? row[groupBy] : row[rowIdentifier]) || index;
                return groupBy ? (
                    <GroupedRow
                        id={identifier}
                        key={identifier}
                        titleRowData={row}
                        setUniqueIds={setUniqueIds}
                        selectedTitleRowIds={selectedRowIds}
                        onTitleRowSelection={onRowSelection}
                        {...{ ...restProps, onGroupedRowSelection }}
                    />
                ) : (
                    <Row id={identifier} key={identifier} data={row} {...{ ...restProps, selectedRowIds, onRowSelection }} />
                );
            })}
            {withMinimap && <Minimap tableRef={tableRef} />}
        </TBody>
    );
});
Body.displayName = 'Body';
export default Body;
