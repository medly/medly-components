import { SvgIconProps } from '@medly-components/icons';
import { TabsTheme } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';
import { TabBackground, TabSize, TabStyle } from '../types';

export type StyledProps = HTMLProps<HTMLButtonElement> &
    WithThemeProp &
    TabsTheme & {
        active?: boolean;
        tabSize?: TabSize;
        tabStyle?: TabStyle;
        fraction?: any;
        tabBackground?: TabBackground;
    };

export interface Props extends HTMLProps<HTMLButtonElement> {
    /** To be used to render tab as any html tag */
    as?: any;
    /** Id of tab */
    id: any;
    /** Label of the tab */
    label: string;
    /** Helper text for the tab */
    helperText?: string;
    /** To Display count in tab */
    count?: number;
    /** To be used to hide the tab */
    hide?: boolean;
    /** Icon to be shown */
    icon?: React.FC<SvgIconProps>;
    /** Disabled State */
    disabled?: boolean;
    /** This will be handled internally */
    active?: boolean;
    /** Provide the fraction of the of the total width of the parent */
    fraction?: number;
}
