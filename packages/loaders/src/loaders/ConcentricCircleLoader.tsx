// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

const ConcentricCircleLoader: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
);

ConcentricCircleLoader.Style = SvgLoader;
ConcentricCircleLoader.displayName = 'ConcentricCircleLoader';
export default ConcentricCircleLoader;
