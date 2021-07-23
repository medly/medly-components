import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { TabSize } from '../types';
export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
}

export type StyledProps = HTMLProps<HTMLDivElement> &
    WithThemeProp & {
        active?: number;
        totalTabs?: number;
        tabSize?: TabSize;
        variant?: 'flat' | 'solid';
    };
