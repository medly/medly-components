import { HTMLProps } from '@medly-components/utils';

export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
    variant?: 'flat' | 'solid';
}

export type StyledProps = HTMLProps<HTMLDivElement> & {
    active?: number;
    totalTabs?: number;
    variant?: 'flat' | 'solid';
};
