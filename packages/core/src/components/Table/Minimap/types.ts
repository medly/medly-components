import { HTMLProps } from 'react';

export interface Props extends Omit<HTMLProps<HTMLTableRowElement>, 'ref' | 'as'> {
    tableRef: any;
    minimapWidth?: number /* Pixels */;
    controllerWidth?: number;
    sliderContentPadding?: number;
}
