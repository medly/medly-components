import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CloudQueueIconSvg from '../../assets/File/cloud_queue_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudQueueIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CloudQueueIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CloudQueueIcon.Style = SvgIcon;
CloudQueueIcon.displayName = 'CloudQueueIcon';

export default CloudQueueIcon
