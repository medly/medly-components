import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DotsBouncingLoaderSvg from '../assets/DotsBouncingLoader.svg';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';

const Component: FC<SvgLoaderProps> = React.memo(props => (
    <SvgLoader {...props}>
        <DotsBouncingLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

Component.displayName = 'DotsBouncingLoader';
export const DotsBouncingLoader: FC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
