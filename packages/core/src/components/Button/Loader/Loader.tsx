import { WithStyle } from '@medly-components/utils';
import { memo } from 'react';
import { BtnLoaderStyled } from './Loader.styled';
import Loader from './Loader.svg';
import { BtnLoaderProps } from './types';
import type { FC } from 'react';

const Component: FC<BtnLoaderProps> = memo(props => (
    <BtnLoaderStyled {...props}>
        <Loader />
    </BtnLoaderStyled>
));

Component.displayName = 'BtnLoader';
export const BtnLoader: FC<BtnLoaderProps> & WithStyle = Object.assign(Component, { Style: BtnLoaderStyled });
