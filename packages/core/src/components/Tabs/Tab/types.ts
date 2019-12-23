import { HTMLProps, Omit } from '@medly-components/utils';

export interface StyledProps extends HTMLProps<HTMLButtonElement> {
    active?: boolean;
}

export interface Props extends StyledProps {
    /** Id of tab */
    id: any;
    /** Label of the tab */
    label: string;
    /** To be used to hide the tab */
    hide?: boolean;
    /** Icon to be shown */
    icon?: React.ElementType;
}
