import { MultiSelectProps } from '../types';

export type InputSuffixProps = {
    id: string;
    variant: MultiSelectProps['variant'];
    disabled: boolean;
    isActive: boolean;
    hasError: boolean;
    onClear: () => void;
    optionsCount: number;
};
