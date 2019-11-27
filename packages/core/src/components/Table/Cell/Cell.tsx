import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import * as Styled from './Cell.styled';
import { Props } from './types';

const Cell: React.SFC<Props> & WithStyle = props => {
    const childRef = useRef(null);
    const { addColumnMaxSize, config, data, rowId, selectedRows, disabled, onRowSelection, dottedFieldName } = props;

    useEffect(() => {
        if (childRef.current) {
            const size = childRef.current.clientWidth;
            addColumnMaxSize(dottedFieldName, size);
        }
    }, [childRef.current]);

    const stopPropogation = (e: React.MouseEvent) => e.stopPropagation(),
        handleRowSelection = (id: number) => (e: React.FormEvent<HTMLInputElement>) => onRowSelection(id);

    return (
        <Styled.Cell hide={config.hide} frozen={config.frozen}>
            {config.field === 'medly-table-checkbox' ? (
                <Checkbox
                    disabled={disabled}
                    ref={childRef}
                    checked={selectedRows.includes(rowId)}
                    onChange={handleRowSelection(rowId)}
                    onClick={stopPropogation}
                    name="active"
                />
            ) : (
                (() => {
                    switch (config.formatter) {
                        case 'boolean':
                            return (
                                <Text ref={childRef} textSize="M3">
                                    {data ? 'Yes' : 'No'}
                                </Text>
                            );
                        case 'react-component': {
                            const Component = config.component;
                            return (
                                <Styled.Div ref={childRef}>
                                    <Component {...{ data, rowId, disabled }} />
                                </Styled.Div>
                            );
                        }
                        default:
                            return (
                                <Text ref={childRef} textSize="M3">
                                    {data}
                                </Text>
                            );
                    }
                })()
            )}
        </Styled.Cell>
    );
};
Cell.Style = Styled.Cell;

export default Cell;
