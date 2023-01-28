import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { TabSize, Variant } from '../types';

export interface TabListProps extends HTMLProps<HTMLDivElement> {
    active: any;
    fullWidth?: boolean;
    onChange: (id: any) => void;
}

export type StyledTabListProps = HTMLProps<HTMLDivElement> &
    WithThemeProp & {
        tabSize: TabSize;
        variant: Variant;
        fullWidth?: boolean;
    };

export type StyledSliderProps = Omit<StyledTabListProps, 'variant'> & {
    active: number;
    totalTabs: number;
};
