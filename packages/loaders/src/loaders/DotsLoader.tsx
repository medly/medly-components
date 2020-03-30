import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DotsLoaderSvg from '../assets/DotsLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const DotsLoader: SFC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

DotsLoader.Style = SvgLoader;
DotsLoader.displayName = 'DotsLoader';
