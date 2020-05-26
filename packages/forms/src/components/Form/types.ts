import { HTMLProps } from '@medly-components/utils';
import { FieldProperties } from '../Fields/types';

type FormProps = Omit<HTMLProps<HTMLFormElement>, 'onSubmit'>;

export interface Schema {
    [key: string]: FieldProperties;
}
export interface Props extends FormProps {
    schema: Schema;
    actionLabel?: string;
    hideActions?: boolean;
    initialState?: { [key: string]: any };
    onSubmit?: (data: { [key: string]: any }) => void;
    fullWidth?: boolean;
    minWidth?: string;
}
