import { WithThemeProp } from '@medly-components/utils';

export interface Props extends WithThemeProp{
    color?: string;
    isActive?: boolean;
    onToggle?: () => void;
    bgColor?: string;

}


