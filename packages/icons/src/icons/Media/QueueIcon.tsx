import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import QueueIconSvg from '../../assets/Media/queue_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const QueueIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <QueueIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

QueueIcon.Style = SvgIcon;
QueueIcon.displayName = 'QueueIcon';

export default QueueIcon
