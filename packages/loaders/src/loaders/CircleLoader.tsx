import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CircleLoaderSvg from '../assets/CircleLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

export const CircleLoader: SFC<Props> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <CircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

CircleLoader.Style = SvgLoader;
CircleLoader.displayName = 'CircleLoader';
