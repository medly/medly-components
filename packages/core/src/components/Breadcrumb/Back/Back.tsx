import { ChevronLeftIcon } from '@medly-components/icons';
import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { forwardRef, memo } from 'react';
import Text from '../../Text';
import { BreadcrumbBackStyled } from './Back.styled';

export const Component: FC<HTMLProps<HTMLLIElement>> = memo(
    forwardRef((props, ref) => (
        <BreadcrumbBackStyled ref={ref} {...props}>
            <ChevronLeftIcon />
            <Text>Back</Text>
        </BreadcrumbBackStyled>
    ))
);
Component.displayName = 'BreadcrumbBack';

export const BreadcrumbBack: typeof Component & WithStyle = Object.assign(Component, {
    Style: BreadcrumbBackStyled
});
