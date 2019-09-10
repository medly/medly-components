import { Option } from '../types';

export interface OptionsProps {
    options: Option[];
    onOptionClick: (option: Option) => () => void;
}
