import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { TabProps } from './Tab/types';
import { TabListProps } from './TabList/types';
import { TabPanelProps } from './TabPanel/types';

export type TabSize = 'S' | 'M' | 'L';

export type TabBackground = 'WHITE' | 'GREY';

export type Variant = 'flat' | 'outlined' | 'solid';

export interface TabsProps extends HTMLProps<HTMLDivElement> {
    /** Use it to render tabs as any html tag */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Id of the default active tab */
    defaultActive?: any;
    /** Id of the active tab */
    active?: any;
    /**  Function to be called on selecting any tab */
    onChange?: (id: any) => void;
    /** Size for the tab */
    tabSize?: TabSize;
    /** Background color of the tabs wrapper */
    tabBackground?: TabBackground;
    /** Force tabs to always stay mounted */
    forceRender?: boolean;
    /** Hide panel if you want to use only tabs as maybe nav link or so */
    hidePanel?: boolean;
    /** Tabs design */
    variant?: Variant;
}

export interface StaticProps {
    Tab: FC<TabProps> & WithStyle;
    TabList: FC<TabListProps> & WithStyle;
    TabPanel: FC<TabPanelProps> & WithStyle;
}
