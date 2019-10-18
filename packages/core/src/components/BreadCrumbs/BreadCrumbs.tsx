import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import List from '../List';
import { BreadCrumbsStyled } from './BreadCrumbs.styled';

export const BreadCrumbs: SFC & WithStyle = React.memo(props => {
    return (
        <BreadCrumbsStyled {...props}>
            <List variant="horizontal">{props.children}</List>
        </BreadCrumbsStyled>
    );
});

BreadCrumbs.displayName = 'BreadCrumbs';
BreadCrumbs.Style = BreadCrumbsStyled;
