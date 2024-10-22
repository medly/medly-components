import { TextFieldProps } from '../../TextField/types';

export type TimePickerTextFieldProps = Omit<TextFieldProps, 'type' | 'onChange'> & {
    onChange: (value: string) => void;
    disableFutureTime?: boolean;
    disablePastTime?: boolean;
};
