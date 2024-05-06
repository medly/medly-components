import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { forwardRef, memo } from 'react';
import Text from '../../Text';
import { BreadcrumbItemStyled } from './Item.styled';
import { BreadcrumbItemProps } from './types';

const Component: FCC<BreadcrumbItemProps> = memo(
    forwardRef(({ children, ...restProps }, ref) => {
        return (
            <BreadcrumbItemStyled ref={ref} {...restProps}>
                {isValidStringOrNumber(children) ? <Text>{children}</Text> : children}
            </BreadcrumbItemStyled>
        );
    })
);

Component.displayName = 'BreadcrumbItem';
export const BreadcrumbItem: FCC<BreadcrumbItemProps> & WithStyle = Object.assign(Component, { Style: BreadcrumbItemStyled });
