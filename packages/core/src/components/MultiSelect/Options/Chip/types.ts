import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

export interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'label'>, WithThemeProp {
    label: number | string;
    onClear: (label?: number | string) => void;
}
