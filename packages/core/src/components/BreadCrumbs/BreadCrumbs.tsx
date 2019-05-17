import { WithStyle } from '@medly-components/utils';
import React from 'react';
import List from '../List';
import { BreadCrumbsStyled } from './BreadCrumbs.styled';

const BreadCrumbs: React.SFC & WithStyle = React.memo(props => {
    return (
        <BreadCrumbsStyled {...props}>
            <List variant="horizontal">{props.children}</List>
        </BreadCrumbsStyled>
    );
});

BreadCrumbs.displayName = 'BreadCrumbs';
BreadCrumbs.Style = BreadCrumbsStyled;

export default BreadCrumbs;
