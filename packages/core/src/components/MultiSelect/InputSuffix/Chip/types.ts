import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type' | 'label'>;

export interface Props extends Omit<ButtonProps, 'size'> {
    size: 'S' | 'M';
    label: number | string;
    hideClearIcon?: boolean;
    variant: 'outlined' | 'filled' | 'fusion';
    state?: 'default' | 'active' | 'error' | 'disabled';
    onClear: (label?: number | string) => void;
}

export type StyledChipProps = Omit<Props, 'label' | 'onClear'> &
    WithThemeProp & {
        state: Required<Props>['state'];
    };
