import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';
import SvgLoader, { SvgLoaderProps } from '../SvgLoader';

export const ConcentricCircleLoader: FC<SvgLoaderProps> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

ConcentricCircleLoader.Style = SvgLoader;
ConcentricCircleLoader.displayName = 'ConcentricCircleLoader';
