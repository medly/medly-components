import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GifIconSvg from '../../assets/Action/gif_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GifIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GifIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GifIcon.Style = SvgIcon;
GifIcon.displayName = 'GifIcon';

export default GifIcon
