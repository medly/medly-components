import { ChevronRightIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children } from 'react';
import BreadcrumbBack from './Back';
import { BreadcrumbStyled } from './Breadcrumb.styled';
import BreadcrumbItem from './Item';
import addSeparator from './addSeparator';
import { BreadcrumbProps, BreadcrumbStaticProps } from './types';

const Component: FCC<BreadcrumbProps> = props => {
    const { separator, children, ...restProps } = props,
        links = Children.toArray(children),
        linksWithSeparator = addSeparator(links, separator);

    return <BreadcrumbStyled {...restProps}>{linksWithSeparator}</BreadcrumbStyled>;
};

Component.displayName = 'Breadcrumb';
Component.defaultProps = { separator: <ChevronRightIcon aria-hidden="true" /> };
export const Breadcrumb: FCC<BreadcrumbProps> & WithStyle & BreadcrumbStaticProps = Object.assign(Component, {
    Item: BreadcrumbItem,
    Back: BreadcrumbBack,
    Style: BreadcrumbStyled
});
