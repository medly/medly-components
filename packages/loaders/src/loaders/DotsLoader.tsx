import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DotsLoaderSvg from '../assets/DotsLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

const Component: FC<SvgLoaderProps> = React.memo(props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

Component.displayName = 'DotsLoader';

export const DotsLoader: FC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
