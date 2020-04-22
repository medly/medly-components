import React, { useCallback, useRef } from 'react';
import Text from '../../../Text';
import { Props } from './types';


export const Cell: React.SFC<Props> = React.memo(props => {
    const childRef = useRef(null),
        {
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
                        <div ref={childRef}>
                            <Component {...{ data, rowId, disabled: isRowClickDisabled }} />
                        </div>
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
