import { WithStyle } from '@medly-components/utils';
import { FCC, memo } from 'react';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';
import DotsLoaderSvg from '../assets/DotsLoader.svg';

const Component: FCC<SvgLoaderProps> = memo(props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

Component.displayName = 'DotsLoader';
export const DotsLoader: FCC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
