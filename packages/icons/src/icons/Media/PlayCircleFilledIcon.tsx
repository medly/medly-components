import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlayCircleFilledIconSvg from '../../assets/Media/play_circle_filled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayCircleFilledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlayCircleFilledIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlayCircleFilledIcon.Style = SvgIcon;
PlayCircleFilledIcon.displayName = 'PlayCircleFilledIcon';

export default PlayCircleFilledIcon
