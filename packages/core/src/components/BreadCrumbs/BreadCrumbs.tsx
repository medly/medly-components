import { HTMLProps, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import List from '../List';
import { BreadCrumbsStyled } from './BreadCrumbs.styled';

export const BreadCrumbs: FC<HTMLProps<HTMLDivElement>> & WithStyle = React.memo(
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
