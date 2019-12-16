import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useRef } from 'react';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import * as Styled from './Cell.styled';
import { Props } from './types';

const Cell: React.SFC<Props> & WithStyle = props => {
    const childRef = useRef(null);
    const { addColumnMaxSize, config, data, rowId, selectedRows, disabled, onRowSelection, dottedFieldName, isLoading } = props;

    useEffect(() => {
        if (childRef.current) {
            const size = childRef.current.clientWidth;
            addColumnMaxSize(dottedFieldName, size);
        }
    }, [childRef.current]);

    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation(),
        handleRowSelection = (id: number) => (e: React.FormEvent<HTMLInputElement>) => onRowSelection(id);

    if (isLoading) {
        return (
            <Styled.Cell hide={config.hide} frozen={config.frozen}>
                <Styled.LoadingDiv />
            </Styled.Cell>
        );
    }

    const RowSelectionCheckbox = () => (
            <Checkbox
                disabled={disabled}
                ref={childRef}
                checked={selectedRows.includes(rowId)}
                onChange={handleRowSelection(rowId)}
                onClick={stopPropagation}
                name="active"
            />
        ),
        FormatedCell = () => {
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
                        <Styled.CustomComponentWrapper ref={childRef}>
                            <Component {...{ data, rowId, disabled }} />
                        </Styled.CustomComponentWrapper>
                    );
                }
                default:
                    return (
                        <Text ref={childRef} textSize="M3">
                            {data}
                        </Text>
                    );
            }
        };

    const textAlign = config.align || (config.formatter === 'numeric' ? 'right' : 'left');

    return (
        <Styled.Cell hide={config.hide} frozen={config.frozen} align={textAlign}>
            {config.field === 'medly-table-checkbox' ? <RowSelectionCheckbox /> : <FormatedCell />}
        </Styled.Cell>
    );
};
Cell.Style = Styled.Cell;

export default Cell;
