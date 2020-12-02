import { ChevronRightIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import addSeparator from './addSeparator';
import BreadcrumbBack from './Back';
import { BreadcrumbStyled } from './Breadcrumb.styled';
import BreadcrumbItem from './Item';
import { BreadcrumbProps, BreadcrumbStaticProps } from './types';

export const Breadcrumb: FC<BreadcrumbProps> & WithStyle & BreadcrumbStaticProps = props => {
    const { separator, children, ...restProps } = props,
        links = React.Children.toArray(children),
        linksWithSeparator = addSeparator(links, separator);

    return <BreadcrumbStyled {...restProps}>{linksWithSeparator}</BreadcrumbStyled>;
};

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Back = BreadcrumbBack;
Breadcrumb.Style = BreadcrumbStyled;
Breadcrumb.defaultProps = {
    separator: <ChevronRightIcon size="S" aria-hidden="true" />
};
