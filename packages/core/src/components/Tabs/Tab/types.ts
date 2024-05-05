import { SvgIconProps } from '@medly-components/icons';
import { TabsTheme } from '@medly-components/theme';
import type { WithThemeProp } from '@medly-components/utils';
import { HTMLProps } from '@medly-components/utils';
import type { FC } from 'react';
import { TabBackground, TabSize, Variant } from '../types';

export type StyledTabProps = HTMLProps<HTMLButtonElement> & {
    fullWidth?: boolean;
    active?: boolean;
    fraction?: number;
    tabSize: TabSize;
    tabBackground: TabBackground;
    variant: Variant;
    totalTabs: number;
};

export type StyledMergedTabProps = StyledTabProps & WithThemeProp & TabsTheme;

export interface TabProps extends HTMLProps<HTMLButtonElement> {
    /** Use it to render tab as any html tag */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Id of tab */
    id: any;
    /** Label of the tab */
    label: string;
    /** Helper text for the tab */
    helperText?: string;
    /** To display count in the tab */
    count?: number;
    /** Use it to hide the tab (cannot be used with the `solid` Tabs variant) */
    hide?: boolean;
    /** Icon to be shown */
    icon?: FC<SvgIconProps>;
    /** Disabled state */
    disabled?: boolean;
    /** To be handled internally */
    active?: boolean;
    /** Provide the fraction of the of the total width of the parent (cannot be used with the `solid` Tabs variant) */
    fraction?: number;
    /** Disabled label text (only visible for the `solid` Tabs variant) */
    disabledLabel?: string;
    /** This prop will be past down by Tabs component so that TabList can be rendered with full width  */
    fullWidth?: string;
}
