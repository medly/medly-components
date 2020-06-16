import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DotsBouncingLoaderSvg from '../assets/DotsBouncingLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const DotsBouncingLoader: FC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <DotsBouncingLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

DotsBouncingLoader.Style = SvgLoader;
DotsBouncingLoader.displayName = 'DotsBouncingLoader';
