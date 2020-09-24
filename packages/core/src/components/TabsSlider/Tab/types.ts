import { TabsSliderTheme } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type StyledProps = HTMLProps<HTMLButtonElement> &
    WithThemeProp &
    TabsSliderTheme & {
        active?: boolean;
        fraction?: any;
        totalTabs?: number;
    };

export interface Props extends HTMLProps<HTMLButtonElement> {
    /** Ids of all tabs */
    totalTabs?: number;
    /** Id of tab */
    id: any;
    /** Label of the tab */
    label: string;
    /** Disabled label text */
    disabledLabel?: string;
    /** To be used to hide the tab */
    hide?: boolean;
    /** Disabled State */
    disabled?: boolean;
    /** This will be handled internally */
    active?: boolean;
    /** Provide the fraction of the of the total width of the parent */
    fraction?: number;
}
