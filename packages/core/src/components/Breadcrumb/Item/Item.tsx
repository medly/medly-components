import { HTMLProps, isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../../Text';
import { BreadcrumbItemStyled } from './Item.styled';

export const BreadcrumbItem: FC<HTMLProps<HTMLLIElement>> & WithStyle = React.memo(
    React.forwardRef(({ children, ...restProps }, ref) => (
        <BreadcrumbItemStyled ref={ref} {...restProps}>
            {isValidStringOrNumber(children) ? <Text>{children}</Text> : children}
        </BreadcrumbItemStyled>
    ))
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.Style = BreadcrumbItemStyled;
