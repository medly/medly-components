import { TextFieldProps } from '../../../TextField/types';

export type Props = Omit<TextFieldProps, 'prefix' | 'suffix'> & {
    isPrefixPresent?: boolean;
    dateMaskLabel: string;
    size: Required<TextFieldProps>['size'];
    variant: Required<TextFieldProps>['variant'];
};
