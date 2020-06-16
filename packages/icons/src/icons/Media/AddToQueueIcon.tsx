import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddToQueueIconSvg from '../../assets/Media/add_to_queue_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddToQueueIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddToQueueIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddToQueueIcon.Style = SvgIcon;
AddToQueueIcon.displayName = 'AddToQueueIcon';

export default AddToQueueIcon
