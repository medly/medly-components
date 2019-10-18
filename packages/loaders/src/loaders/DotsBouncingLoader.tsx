// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DotsBouncingLoaderSvg from '../assets/DotsBouncingLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

export const DotsBouncingLoader: SFC<Props> & WithStyle = props => (
    <SvgLoader {...props}>
        <DotsBouncingLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
);

DotsBouncingLoader.Style = SvgLoader;
DotsBouncingLoader.displayName = 'DotsBouncingLoader';
