import { MobileTabsTheme } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { TabBackground, TabSize, TabStyle } from '../types';

export type StyledProps = HTMLProps<HTMLButtonElement> &
    WithThemeProp &
    MobileTabsTheme & {
        active?: boolean;
        tabSize?: TabSize;
        tabStyle?: TabStyle;
        fraction?: any;
        tabBackground?: TabBackground;
    };

export interface Props extends HTMLProps<HTMLButtonElement> {
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
