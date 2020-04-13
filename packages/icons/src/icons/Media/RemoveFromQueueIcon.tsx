import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RemoveFromQueueIconSvg from '../../assets/Media/remove_from_queue_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveFromQueueIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RemoveFromQueueIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RemoveFromQueueIcon.Style = SvgIcon;
RemoveFromQueueIcon.displayName = 'RemoveFromQueueIcon';

export default RemoveFromQueueIcon
