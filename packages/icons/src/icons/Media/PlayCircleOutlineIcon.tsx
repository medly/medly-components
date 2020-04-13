import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlayCircleOutlineIconSvg from '../../assets/Media/play_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlayCircleOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlayCircleOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlayCircleOutlineIcon.Style = SvgIcon;
PlayCircleOutlineIcon.displayName = 'PlayCircleOutlineIcon';

export default PlayCircleOutlineIcon
