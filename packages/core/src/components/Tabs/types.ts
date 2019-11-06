import { HTMLProps, WithStyle } from '@medly-components/utils';
import { Props as TabProps } from './Tab/types';
import { Props as TabListProps } from './TabList/types';
import { Props as TabPanelProps } from './TabPanel/types';

export interface Props extends HTMLProps<HTMLDivElement> {
    defaultActive?: any;
    active?: any;
    onChange?: (id: any) => void;
}

export interface StaticProps {
    Tab?: React.SFC<TabProps> & WithStyle;
    TabList?: React.SFC<TabListProps> & WithStyle;
    TabPanel?: React.SFC<TabPanelProps> & WithStyle;
}
