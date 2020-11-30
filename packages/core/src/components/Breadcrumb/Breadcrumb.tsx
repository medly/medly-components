import { HTMLProps, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import List from '../List';
import { BreadcrumbStyled } from './Breadcrumb.styled';

export const Breadcrumb: FC<HTMLProps<HTMLDivElement>> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <BreadcrumbStyled ref={ref} {...props}>
                <List variant="horizontal">{props.children}</List>
            </BreadcrumbStyled>
        );
    })
);

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Style = BreadcrumbStyled;
