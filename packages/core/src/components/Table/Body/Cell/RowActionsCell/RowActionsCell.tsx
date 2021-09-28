import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { useCallback } from 'react';
import Checkbox from '../../../../Checkbox';
import { LoadingDiv } from '../Styled';
import { RowActionsCellStyled } from './RowActionsCell.styled';
import { RowActionProps } from './types';

const Component: React.FC<RowActionProps> = React.memo(props => {
    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    return (
        <RowActionsCellStyled
            onClick={stopPropagation}
            isLoading={props.isLoading}
            isRowExpanded={props.isRowExpanded}
            isRowExpandable={props.isRowExpandable}
            isRowSelectable={props.isRowSelectable}
            isRowSelected={props.isRowSelected}
            tableSize={props.tableSize}
            isGroupedTable={props.isGroupedTable}
            showShadowAtRight={props.showShadowAtRight}
        >
            {props.isLoading ? (
                <LoadingDiv />
            ) : (
                <>
                    {props.isRowExpandable && (
                        <ExpandMoreIcon size={props.tableSize === 'L' ? 'M' : 'S'} onClick={props.onRowExpansionIconClick} />
                    )}
                    {props.isRowSelectable && (
                        <Checkbox
                            size={props.tableSize === 'XS' ? props.tableSize : null}
                            indeterminate={props.isRowIndeterminate}
                            disabled={props.isRowSelectionDisabled}
                            checked={props.isRowSelected}
                            onChange={props.onRowSelection}
                            onClick={stopPropagation}
                        />
                    )}
                </>
            )}
        </RowActionsCellStyled>
    );
});
Component.displayName = 'RowActionsCell';
export const RowActionsCell: React.FC<RowActionProps> & WithStyle = Object.assign(Component, { Style: RowActionsCellStyled });
