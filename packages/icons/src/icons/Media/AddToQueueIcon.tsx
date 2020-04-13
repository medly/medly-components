import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddToQueueIconSvg from '../../assets/Media/add_to_queue_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddToQueueIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AddToQueueIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AddToQueueIcon.Style = SvgIcon;
AddToQueueIcon.displayName = 'AddToQueueIcon';

export default AddToQueueIcon
