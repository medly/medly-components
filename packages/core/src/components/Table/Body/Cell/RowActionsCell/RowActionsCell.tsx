import { ExpandMoreIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils/src';
import React, { useCallback } from 'react';
import Checkbox from '../../../../Checkbox';
import { LoadingDiv } from '../Styled';
import { RowActionsCellStyled } from './RowActionsCell.styled';
import { RowActionProps } from './types';

export const RowActionsCell: React.FC<RowActionProps> & WithStyle = React.memo(props => {
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
                    {props.isRowExpandable && <ExpandMoreIcon size="L" onClick={props.onRowExpansionIconClick} />}
                    {props.isRowSelectable && (
                        <Checkbox
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
RowActionsCell.displayName = 'RowActionsCell';
RowActionsCell.Style = RowActionsCellStyled;
