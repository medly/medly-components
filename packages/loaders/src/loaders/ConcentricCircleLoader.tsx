import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import ConcentricCircleLoaderSvg from '../assets/ConcentricCircleLoader.svg';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';

const Component: FC<SvgLoaderProps> = memo(props => (
    <SvgLoader {...props}>
        <ConcentricCircleLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
));

Component.displayName = 'ConcentricCircleLoader';
export const ConcentricCircleLoader: FC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
