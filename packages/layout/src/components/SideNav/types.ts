import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export interface NavItem extends HTMLProps<HTMLUListElement>, WithThemeProp {
    active?: boolean;
}

export interface Props extends HTMLProps<HTMLUListElement>, WithThemeProp {}

export interface SideNaveStaticProps {
    NavItem: React.FunctionComponent<NavItem>;
}
