import { createContext } from 'react';
import { TableProps } from '../types';

export const TableComponentsCommonPropsContext = createContext<
    TableProps & {
        rowIdentifier: string;
        size: Required<TableProps>['size'];
        isGroupedTable: boolean;
        tableRef: React.RefObject<HTMLTableElement>;
        hiddenDivRef: React.MutableRefObject<any>;
        addColumnMaxSize: (field: string, value: number) => void;
        keyBindings: Required<TableProps>['keyBindings'];
    }
    // @ts-ignore
>({});
