// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import CircleLoaderSvg from '../assets/CircleLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

const CircleLoader: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgLoader {...props}>
        <CircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
);

CircleLoader.Style = SvgLoader;
CircleLoader.displayName = 'CircleLoader';
export default CircleLoader;
