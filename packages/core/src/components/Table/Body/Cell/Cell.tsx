import { ThemeContext, WithStyle } from '@medly-components/utils';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import Text from '../../../Text';
import { Cell as StyledCell, CustomComponentWrapper, LoadingDiv } from './Styled';
import { TableCellProps } from './types';

const Cell: React.FC<TableCellProps> & WithStyle = React.memo(props => {
    const customComponentWrapperRef = useRef(null),
        {
            addColumnMaxSize,
            config,
            data,
            rowId,
            rowData,
            isRowClickDisabled,
            dottedFieldName,
            tableSize,
            isLoading,
            hiddenDivRef,
            ...restProps
        } = props,
        { align, hidden, frozen, formatter, component: CustomComponent } = config;
    const theme = useContext(ThemeContext),
        formattedData = useMemo(() => (formatter ? formatter(data, rowData) : data), [formatter, data]);

    useEffect(() => {
        if (!isLoading && addColumnMaxSize) {
            let currentSize = 0;
            if (CustomComponent && customComponentWrapperRef.current) {
                currentSize = customComponentWrapperRef.current.clientWidth;
            } else if (hiddenDivRef.current) {
                hiddenDivRef.current.innerHTML = data;
                currentSize = hiddenDivRef.current.clientWidth;
            }
            currentSize > 0 && addColumnMaxSize(dottedFieldName, currentSize + (tableSize === 'L' ? 48 : 32));
        }
    }, [data, isLoading, addColumnMaxSize, tableSize]);

    return (
        <StyledCell hidden={hidden} frozen={frozen} tableSize={tableSize} align={align} {...restProps} wrapText={config.wrapText}>
            {isLoading ? (
                <LoadingDiv />
            ) : CustomComponent ? (
                <CustomComponentWrapper ref={customComponentWrapperRef} align={config.align}>
                    <CustomComponent {...{ data: formattedData, rowId, disabled: isRowClickDisabled, rowData }} />
                </CustomComponentWrapper>
            ) : (
                <Text textVariant={theme.table.row.fontVariant} title={formattedData}>
                    {formattedData}
                </Text>
            )}
        </StyledCell>
    );
});
Cell.displayName = 'Cell';
Cell.Style = StyledCell;

export default Cell;
