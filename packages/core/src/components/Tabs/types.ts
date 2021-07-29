import { HTMLProps, WithStyle } from '@medly-components/utils';
import { Props as TabProps } from './Tab/types';
import { Props as TabListProps } from './TabList/types';
import { Props as TabPanelProps } from './TabPanel/types';

export type TabSize = 'S' | 'M' | 'L';

export type TabBackground = 'WHITE' | 'GREY';

export type Variant = 'flat' | 'outlined' | 'solid';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** To be used to render tabs as any html tag */
    as?: any;
    /** Id of the default active tab */
    defaultActive?: any;
    /** Id of the active tab */
    active?: any;
    /**  Function to be called on selecting any tab */
    onChange?: (id: any) => void;
    /** Size for tab */
    tabSize?: TabSize;
    /** Background color of the Tabs wrapper */
    tabBackground?: TabBackground;
    /** Force tabs to always stay mounted */
    forceRender?: boolean;
    /** Hide panel if you want to use only tabs as maybe nav link or so */
    hidePanel?: boolean;
    /** Tabs design */
    variant?: Variant;
}

export interface StaticProps {
    Tab?: React.FC<TabProps> & WithStyle;
    TabList?: React.FC<TabListProps> & WithStyle;
    TabPanel?: React.FC<TabPanelProps> & WithStyle;
}
