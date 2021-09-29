import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

const Component: FC<SvgLoaderProps> = React.memo(props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

Component.displayName = 'ConcentricCircleLoader';
export const ConcentricCircleLoader: FC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
