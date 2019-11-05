import { HTMLProps, Omit } from '@medly-components/utils';

export interface StyledProps extends HTMLProps<HTMLButtonElement> {
    active?: boolean;
}

export interface Props extends StyledProps {
    id: any;
    label: string;
    icon?: React.ElementType;
}
