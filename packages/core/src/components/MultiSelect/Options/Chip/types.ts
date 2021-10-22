import { HTMLProps, Omit } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'label'> {
    value: number | string;
    label: number | string;
    onClear: (label?: number | string) => void;
}
