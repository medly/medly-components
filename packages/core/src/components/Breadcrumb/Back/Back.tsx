import { ChevronLeftIcon } from '@medly-components/icons';
import { HTMLProps } from '@medly-components/utils';
import React, { FC } from 'react';
import Text from '../../Text';
import { BreadcrumbBackStyled } from './Back.styled';

export const BreadcrumbBack: FC<HTMLProps<HTMLLIElement>> = React.memo(
    React.forwardRef((props, ref) => (
        <BreadcrumbBackStyled ref={ref} {...props}>
            <ChevronLeftIcon size="S" />
            <Text>Back</Text>
        </BreadcrumbBackStyled>
    ))
);

BreadcrumbBack.displayName = 'BreadcrumbBack';
