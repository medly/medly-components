import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CircleLoaderSvg from '../assets/CircleLoader.svg';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';

const Component: FC<SvgLoaderProps> = React.memo(props => (
    <SvgLoader {...props}>
        <CircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

Component.displayName = 'CircleLoader';
export const CircleLoader: FC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
