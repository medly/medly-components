import { HTMLProps, Omit } from '@medly-components/utils';

export type Props = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    data: { [key: string]: any };
    selectedRowIds?: Array<any>;
    addColumnMaxSize: (field: string, value: number) => void;
    onRowSelection?: (id: any) => void;
    showShadowAfterFrozenElement?: boolean;
};
