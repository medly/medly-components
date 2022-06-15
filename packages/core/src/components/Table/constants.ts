import { KeyBindings, TableColumnConfig } from './types';

export const rowActionsColumnConfig: TableColumnConfig = {
    title: '',
    field: 'row-actions',
    frozen: true
};

export const loadingBodyData = [{ id: 'loading1' }, { id: 'loading2' }, { id: 'loading3' }, { id: 'loading4' }, { id: 'loading5' }];

export const defaultKeyBindings: KeyBindings = {
    up: 'ArrowUp',
    down: 'ArrowDown',
    expandRow: 'ArrowRight',
    collapseRow: 'ArrowLeft',
    clickRow: 'Enter',
    selectRow: ' '
};
