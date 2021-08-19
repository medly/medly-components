import { GridTemplateProps, TableProps } from '../types';

export interface GroupCellProps extends GridTemplateProps {
    hidden: boolean;
    isTitleCell?: boolean;
    tableSize?: TableProps['size'];
}
