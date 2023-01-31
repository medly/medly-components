import { ChevronLeftIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import { FC, forwardRef, memo } from 'react';
import Text from '../../Text';
import { BreadcrumbBackStyled } from './Back.styled';
import { BreadcrumbBackProps } from './types';

export const Component: FC<BreadcrumbBackProps> = memo(
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
