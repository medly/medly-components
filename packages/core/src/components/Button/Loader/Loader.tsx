import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import { BtnLoaderStyled } from './Loader.styled';
import Loader from './Loader.svg';
import { BtnLoaderProps } from './types';

const Component: FCC<BtnLoaderProps> = memo(props => (
    <BtnLoaderStyled {...props}>
        <Loader title="button-loader" />
    </BtnLoaderStyled>
));

Component.displayName = 'BtnLoader';
export const BtnLoader: FCC<BtnLoaderProps> & WithStyle = Object.assign(Component, { Style: BtnLoaderStyled });
