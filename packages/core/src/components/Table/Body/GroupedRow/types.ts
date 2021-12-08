import { HTMLProps, Omit } from '@medly-components/utils';

export type GroupedRowProps = Omit<HTMLProps<HTMLTableRowElement>, 'style' | 'data'> & {
    titleRowData: { [key: string]: any };
    setUniqueIds: React.Dispatch<React.SetStateAction<any[]>>;
    selectedTitleRowIds: Array<any>;
    onTitleRowSelection: (id: any) => void;
    onGroupedRowSelection: (id: any[]) => void;
    showShadowAfterFrozenElement: boolean;
    setSelectAllDisableState: React.Dispatch<React.SetStateAction<boolean>>;
    isNavigated?: boolean;
    isRowSelectedFromKeyboard?: boolean;
    isRowExpandedFromKeyboard?: boolean;
    isRowCollapsedFromKeyboard?: boolean;
};
