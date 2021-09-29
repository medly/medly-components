import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { BtnLoaderStyled } from './Loader.styled';
import Loader from './Loader.svg';
import { BtnLoaderProps } from './types';

const Component: FC<BtnLoaderProps> = React.memo(props => (
    <BtnLoaderStyled {...props}>
        <Loader />
    </BtnLoaderStyled>
));

Component.displayName = 'BtnLoader';
export const BtnLoader: FC<BtnLoaderProps> & WithStyle = Object.assign(Component, { Style: BtnLoaderStyled });
