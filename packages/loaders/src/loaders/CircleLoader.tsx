import { WithStyle } from '@medly-components/utils';
import { FCC, memo } from 'react';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';
import CircleLoaderSvg from '../assets/CircleLoader.svg';

const Component: FCC<SvgLoaderProps> = memo(props => (
    <SvgLoader {...props}>
        <CircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

Component.displayName = 'CircleLoader';
export const CircleLoader: FCC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
