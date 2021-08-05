import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../../Text';
import { BreadcrumbItemStyled } from './Item.styled';
import { BreadcrumbItemProps } from './types';

export const BreadcrumbItem: FC<BreadcrumbItemProps> & WithStyle = React.memo(
    React.forwardRef(({ children, ...restProps }, ref) => {
        return (
            <BreadcrumbItemStyled ref={ref} {...restProps}>
                {isValidStringOrNumber(children) ? <Text>{children}</Text> : children}
            </BreadcrumbItemStyled>
        );
    })
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.Style = BreadcrumbItemStyled;
