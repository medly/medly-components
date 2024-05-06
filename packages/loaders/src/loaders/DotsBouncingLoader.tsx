import { WithStyle } from '@medly-components/utils';
import { FCC, memo } from 'react';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';
import DotsBouncingLoaderSvg from '../assets/DotsBouncingLoader.svg';

const Component: FCC<SvgLoaderProps> = memo(props => (
    <SvgLoader {...props}>
        <DotsBouncingLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

Component.displayName = 'DotsBouncingLoader';
export const DotsBouncingLoader: FCC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
