import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RemoveFromQueueIconSvg from '../../assets/Media/remove_from_queue_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveFromQueueIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RemoveFromQueueIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RemoveFromQueueIcon.Style = SvgIcon;
RemoveFromQueueIcon.displayName = 'RemoveFromQueueIcon';

export default RemoveFromQueueIcon
