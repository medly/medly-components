import { LabelPositions } from '../Label/types';

export interface Props {
    labelPosition?: LabelPositions;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    value?: any;
    onChange?: (value: any) => void;
}
