import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DotsLoaderSvg from '../assets/DotsLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

export const DotsLoader: SFC<Props> & WithStyle = React.memo(props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

DotsLoader.Style = SvgLoader;
DotsLoader.displayName = 'DotsLoader';
