// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DotsLoaderSvg from '../assets/DotsLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

const DotsLoader: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
);

DotsLoader.Style = SvgLoader;
DotsLoader.displayName = 'DotsLoader';
export default DotsLoader;
