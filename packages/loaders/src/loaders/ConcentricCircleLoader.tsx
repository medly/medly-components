import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

export const ConcentricCircleLoader: SFC<Props> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

ConcentricCircleLoader.Style = SvgLoader;
ConcentricCircleLoader.displayName = 'ConcentricCircleLoader';
