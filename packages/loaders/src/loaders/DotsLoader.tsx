import { WithStyle } from '@medly-components/utils';
import { FC, memo } from 'react';
import DotsLoaderSvg from '../assets/DotsLoader.svg';
import SvgLoader from '../SvgLoader';
import { SvgLoaderProps } from '../SvgLoader/types';

const Component: FC<SvgLoaderProps> = memo(props => (
    <SvgLoader {...props}>
        <DotsLoaderSvg {...props} width="1em" height="0.5em" />
    </SvgLoader>
));

Component.displayName = 'DotsLoader';
export const DotsLoader: FC<SvgLoaderProps> & WithStyle = Object.assign(Component, { Style: SvgLoader });
