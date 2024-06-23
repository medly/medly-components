import { TextFieldProps } from '../../../TextField/types';

export type Props = Omit<TextFieldProps, 'prefix' | 'suffix'> & {
    isPrefixPresent?: boolean;
    dateMaskLabel: string;
    size: Required<TextFieldProps>['size'];
    maxLength: number;
    variant: Required<TextFieldProps>['variant'];
};
