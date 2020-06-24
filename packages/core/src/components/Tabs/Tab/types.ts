import { HTMLProps } from '@medly-components/utils';
import { TabSize } from '../types';

export interface StyledProps extends HTMLProps<HTMLButtonElement> {
    active?: boolean;
    hasIcon?: boolean;
    tabSize?: TabSize;
    secondaryLabel?: string;
}

export interface WrapperProps extends HTMLProps<HTMLDivElement> {
    active?: boolean;
    hasIcon?: boolean;
    tabSize?: TabSize;
    secondaryLabel?: string;
}

export interface Props extends StyledProps {
    /** Id of tab */
    id: any;
    /** Label of the tab */
    label: string;
    /** Secondary Label for the tab */
    secondaryLabel?: string;
    /** To Display count in tab */
    count?: number;
    /** To be used to hide the tab */
    hide?: boolean;
    /** Icon to be shown */
    icon?: React.ElementType;
    /** Disabled State */
    disabled?: boolean;
}
