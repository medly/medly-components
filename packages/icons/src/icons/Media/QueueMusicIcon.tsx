import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import QueueMusicIconSvg from '../../assets/Media/queue_music_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const QueueMusicIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <QueueMusicIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

QueueMusicIcon.Style = SvgIcon;
QueueMusicIcon.displayName = 'QueueMusicIcon';

export default QueueMusicIcon
