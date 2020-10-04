import { DateRangeProps } from '../../types';

export type InputSeparatorProps = {
    size: 'S' | 'M';
    isErrorPresent: boolean;
    isActive: boolean;
    disabled: boolean;
    variant: DateRangeProps['variant'];
};
