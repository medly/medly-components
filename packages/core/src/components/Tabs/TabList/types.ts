import { HTMLProps } from '@medly-components/utils';
import { TabSize } from '../types';

export interface Props extends HTMLProps<HTMLDivElement> {
    active: any;
    onChange: (id: any) => void;
    tabSize: TabSize;
}
