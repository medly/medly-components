import { TableColumnConfig } from './types';

export const expansionIconColumnConfig: TableColumnConfig = {
    title: '',
    field: 'medly-row-expansion',
    formatter: 'checkbox',
    hidden: false,
    frozen: false
};

export const checkboxColumnConfig: TableColumnConfig = {
    title: 'ch',
    field: 'medly-table-checkbox',
    formatter: 'checkbox',
    hidden: false,
    frozen: false
};

export const loadingBodyData = [{ id: 'loading1' }, { id: 'loading2' }, { id: 'loading3' }, { id: 'loading4' }, { id: 'loading5' }];
