import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../../Text';
import { BreadcrumbItemStyled } from './Item.styled';
import { BreadcrumbItemProps } from './types';

const Component: FC<BreadcrumbItemProps> = React.memo(
    React.forwardRef(({ children, ...restProps }, ref) => {
        return (
            <BreadcrumbItemStyled ref={ref} {...restProps}>
                {isValidStringOrNumber(children) ? <Text>{children}</Text> : children}
            </BreadcrumbItemStyled>
        );
    })
);

Component.displayName = 'BreadcrumbItem';
export const BreadcrumbItem: FC<BreadcrumbItemProps> & WithStyle = Object.assign(Component, { Style: BreadcrumbItemStyled });
