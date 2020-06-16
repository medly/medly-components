import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CircleLoaderSvg from '../assets/CircleLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const CircleLoader: FC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <CircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

CircleLoader.Style = SvgLoader;
CircleLoader.displayName = 'CircleLoader';
