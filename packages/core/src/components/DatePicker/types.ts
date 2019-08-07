import { LabelPositions } from '../Label/types';

export interface Props {
    labelPosition?: LabelPositions;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    value: any;
    placeholder?: string;
    onChange: (value: any) => void;
}
