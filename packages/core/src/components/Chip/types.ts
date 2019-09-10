import { HTMLProps, Omit, WithThemeProp } from '@medly-components/utils';

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, 'type'>;

export interface StyledProps extends ButtonProps, WithThemeProp {
    variant?: 'solid' | 'flat' | 'outlined';
    color?: string;
    as?: any;
    to?: string;
}

export interface Props extends StyledProps {
    label: string;
    onClick?: () => void;
    onDelete?: () => void;
}
