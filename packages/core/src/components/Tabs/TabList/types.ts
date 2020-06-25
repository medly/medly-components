import { HTMLProps } from '@medly-components/utils';
import { TabBackground, TabSize, TabStyle } from '../types';

export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
    tabSize?: TabSize;
    tabStyle?: TabStyle;
    tabBackground?: TabBackground;
}
