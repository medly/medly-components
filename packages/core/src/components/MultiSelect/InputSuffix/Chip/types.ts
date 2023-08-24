import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';
import { TextFieldVariants } from '../../../TextField/types';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type' | 'label'>;

export interface Props extends Omit<ButtonProps, 'size'> {
    size: 'S' | 'M';
    label: number | string;
    hideClearIcon?: boolean;
    variant: TextFieldVariants;
    state?: 'default' | 'active' | 'error' | 'disabled';
    onClear: (label?: number | string) => void;
}

export type StyledChipProps = Omit<Props, 'label' | 'onClear'> &
    WithThemeProp & {
        state: Required<Props>['state'];
    };
