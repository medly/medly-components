import { HTMLProps, WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import List from '../List';
import { BreadCrumbsStyled } from './BreadCrumbs.styled';

export const BreadCrumbs: SFC<HTMLProps<HTMLDivElement>> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <BreadCrumbsStyled ref={ref} {...props}>
                <List variant="horizontal">{props.children}</List>
            </BreadCrumbsStyled>
        );
    })
);

BreadCrumbs.displayName = 'BreadCrumbs';
BreadCrumbs.Style = BreadCrumbsStyled;
