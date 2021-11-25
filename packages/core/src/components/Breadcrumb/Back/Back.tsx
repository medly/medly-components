import { ChevronLeftIcon } from '@medly-components/icons';
import { HTMLProps } from '@medly-components/utils';
import { memo, forwardRef } from 'react';
import Text from '../../Text';
import { BreadcrumbBackStyled } from './Back.styled';
import type { FC } from 'react';

export const BreadcrumbBack: FC<HTMLProps<HTMLLIElement>> = memo(
    forwardRef((props, ref) => (
        <BreadcrumbBackStyled ref={ref} {...props}>
            <ChevronLeftIcon size="S" />
            <Text>Back</Text>
        </BreadcrumbBackStyled>
    ))
);

BreadcrumbBack.displayName = 'BreadcrumbBack';
