import { HTMLProps, Omit } from '@medly-components/utils';

export type Props = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    titleRowData: { [key: string]: any };
    selectedTitleRowIds: Array<any>;
    addColumnMaxSize: (field: string, value: number) => void;
    onTitleRowSelection: (id: any) => void;
    onGroupedRowSelection: (id: number[] | string[]) => void;
    showShadowAfterFrozenElement: boolean;
    setSelectAllDisableState: React.Dispatch<React.SetStateAction<boolean>>;
};
