import { TableColumnConfig } from './types';

export const rowActionsColumnConfig: TableColumnConfig = {
    title: '',
    field: 'row-actions',
    formatter: 'row-actions',
    hidden: false,
    frozen: true
};

export const loadingBodyData = [{ id: 'loading1' }, { id: 'loading2' }, { id: 'loading3' }, { id: 'loading4' }, { id: 'loading5' }];
