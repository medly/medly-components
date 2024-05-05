import { WithStyle } from '@medly-components/utils';
import { FCC, memo } from 'react';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';

const Component: FCC<SvgLoaderProps> = memo(props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

Component.displayName = 'ConcentricCircleLoader';
export const ConcentricCircleLoader: FCC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
