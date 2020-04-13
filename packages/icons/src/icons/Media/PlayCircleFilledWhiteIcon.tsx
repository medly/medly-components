import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlayCircleFilledWhiteIconSvg from '../../assets/Media/play_circle_filled_white_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayCircleFilledWhiteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlayCircleFilledWhiteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlayCircleFilledWhiteIcon.Style = SvgIcon;
PlayCircleFilledWhiteIcon.displayName = 'PlayCircleFilledWhiteIcon';

export default PlayCircleFilledWhiteIcon
