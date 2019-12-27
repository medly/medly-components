import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Checkbox from '../../Checkbox';
import Text from '../../Text';
import * as Styled from './Cell.styled';
import { Props } from './types';

const Cell: React.SFC<Props> & WithStyle = React.memo(props => {
    const childRef = useRef(null),
        { addColumnMaxSize, config, data, rowId, isRowSelected, disabled, onRowSelection, dottedFieldName, isLoading } = props;

    useEffect(() => {
        if (childRef.current) {
            const size = childRef.current.clientWidth;
            !isLoading && addColumnMaxSize(dottedFieldName, size);
        }
    }, [childRef.current]);

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleRowSelection = (id: number) => (e: React.FormEvent<HTMLInputElement>) => onRowSelection(id);

    const rowSelectionCheckbox = useMemo(
            () => (
                <Checkbox
                    disabled={disabled}
                    ref={childRef}
                    checked={isRowSelected}
                    onChange={handleRowSelection(rowId)}
                    onClick={stopPropagation}
                    name="active"
                />
            ),
            [disabled, isRowSelected]
        ),
        formatedCell = useCallback(() => {
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
        }, [data, isLoading]);

    const textAlign = useMemo(() => config.align || (config.formatter === 'numeric' ? 'right' : 'left'), []);

    if (isLoading) {
        return (
            <Styled.Cell hide={config.hide} frozen={config.frozen}>
                <Styled.LoadingDiv ref={childRef} />
            </Styled.Cell>
        );
    }

    return (
        <Styled.Cell hide={config.hide} frozen={config.frozen} align={textAlign}>
            {config.field === 'medly-table-checkbox' ? rowSelectionCheckbox : formatedCell()}
        </Styled.Cell>
    );
});
Cell.displayName = 'Cell';
Cell.Style = Styled.Cell;

export default Cell;
