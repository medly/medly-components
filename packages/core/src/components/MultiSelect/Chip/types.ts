import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type' | 'label'>;

export interface Props extends Omit<ButtonProps, 'size'>, WithThemeProp {
    size: 'S' | 'M';
    label: number | string;
    variant?: 'outlined' | 'filled' | 'fusion';
    state?: 'default' | 'active' | 'error' | 'disabled';
    onClear?: (label?: number | string) => void;
}
