import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
}
