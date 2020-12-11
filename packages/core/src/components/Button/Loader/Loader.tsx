import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { BtnLoaderStyled } from './Loader.styled';
import Loader from './Loader.svg';
import { BtnLoaderProps } from './types';

export const BtnLoader: FC<BtnLoaderProps> & WithStyle = React.memo(props => (
    <BtnLoaderStyled {...props}>
        <Loader />
    </BtnLoaderStyled>
));

BtnLoader.Style = BtnLoaderStyled;
BtnLoader.displayName = 'BtnLoader';
