import { Option } from '../types';

export interface OptionsProps {
    id: string;
    options: Option[];
    onOptionClick: (option: Option) => void;
}
