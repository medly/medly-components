import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DotsBouncingLoaderSvg from '../assets/DotsBouncingLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const DotsBouncingLoader: SFC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <DotsBouncingLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

DotsBouncingLoader.Style = SvgLoader;
DotsBouncingLoader.displayName = 'DotsBouncingLoader';
