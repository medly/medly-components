import { Text } from '@medly-components/core';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface SideNavStyledProps extends WithThemeProp {
    open: boolean;
}

export interface SideNavStaticProps {
    NavItem: React.SFC<NavItem>;
    NavIcon: React.SFC;
    NavText: typeof Text;
}

export interface NavListProps extends HTMLProps<HTMLDivElement>, WithThemeProp {}

export interface NavItem extends HTMLProps<HTMLDivElement>, WithThemeProp {
    as?: any;
    to?: string;
    active?: boolean;
}
