import { createContext } from 'react';
import { TableProps } from '../types';

export const TableComponentsCommonPropsContext = createContext<
    | (TableProps & {
          isGroupedTable: boolean;
          tableRef: React.MutableRefObject<HTMLTableElement>;
          hiddenDivRef: React.MutableRefObject<any>;
          addColumnMaxSize: (field: string, value: number) => void;
      })
    | null
>(null);
