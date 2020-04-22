import React, { useCallback } from 'react';
import Text from '../../../Text';
import { Props } from './types';


export const Cell: React.SFC<Props> = React.memo(props => {
    const {
            data,
            rowId,
            column,
            isRowClickDisabled,
        } = props
    const formattedCell = useCallback(() => {
            switch (column.formatter) {
                case 'boolean':
                    return <Text> {data} </Text>;
                case 'react-component': {
                    const Component = column.component;
                    return (
                        <Component {...{ data, rowId, disabled: isRowClickDisabled }} />
                    );
                }
                default:
                    return <Text>{data}</Text>;
            }
        }, [data, rowId, isRowClickDisabled, column]);


    return (
        <>
            {formattedCell()}
        </>
    );
});
Cell.displayName = 'Cell';
