import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudQueueIconSvg from '../../assets/File/cloud_queue_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudQueueIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CloudQueueIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CloudQueueIcon.Style = SvgIcon;
CloudQueueIcon.displayName = 'CloudQueueIcon';

export default CloudQueueIcon
