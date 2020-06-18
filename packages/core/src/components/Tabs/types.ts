import { HTMLProps, WithStyle } from '@medly-components/utils';
import { Props as TabProps } from './Tab/types';
import { Props as TabListProps } from './TabList/types';
import { Props as TabPanelProps } from './TabPanel/types';

export type TabSize = 'S' | 'M' | 'L';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** Id of the default active tab */
    defaultActive?: any;
    /** Id of the active tab */
    active?: any;
    /**  Function to be called on selecting any tab */
    onChange?: (id: any) => void;
    /** Size for tab, default is S */
    tabSize?: TabSize;
}

export interface StaticProps {
    Tab?: React.FC<TabProps> & WithStyle;
    TabList?: React.FC<TabListProps> & WithStyle;
    TabPanel?: React.FC<TabPanelProps> & WithStyle;
}
