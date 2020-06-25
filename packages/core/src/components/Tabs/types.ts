import { HTMLProps, WithStyle } from '@medly-components/utils';
import { Props as TabProps } from './Tab/types';
import { Props as TabListProps } from './TabList/types';
import { Props as TabPanelProps } from './TabPanel/types';

export type TabSize = 'S' | 'M' | 'L';

export type TabBackground = 'WHITE' | 'GREY';

export type TabStyle = 'OPEN' | 'CLOSED';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Id of the default active tab */
    defaultActive?: any;
    /** Id of the active tab */
    active?: any;
    /**  Function to be called on selecting any tab */
    onChange?: (id: any) => void;
    /** Size for tab, default is S */
    tabSize?: TabSize;
    /** Tab can have tab style of OPEN and CLOSED */
    tabStyle?: TabStyle;
    /**  Tab Background can be WHITE or GREY */
    tabBackground?: TabBackground;
}

export interface StaticProps {
    Tab?: React.FC<TabProps> & WithStyle;
    TabList?: React.FC<TabListProps> & WithStyle;
    TabPanel?: React.FC<TabPanelProps> & WithStyle;
}
