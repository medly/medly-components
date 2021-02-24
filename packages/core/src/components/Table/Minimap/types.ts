import { HTMLProps } from 'react';

export interface Props extends Omit<HTMLProps<HTMLTableRowElement>, 'ref' | 'as'> {
    tableRef: any;
    minimapWidth?: number /* Pixels */;
    controllerWidth?: number /* Pixels */;
    sliderContentPadding?: number /* Pixels */;
    minimapDimensionDeps?: Array<any> /* Dependencies on which table dimension calculations relies */;
}
