import { HTMLProps } from '@medly-components/utils';

export type StyledProps = HTMLProps<HTMLButtonElement> & {
    active: number;
    totalTabs?: number;
};

export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
}
