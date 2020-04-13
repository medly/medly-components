import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SyncIconSvg from '../../assets/Notification/sync_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SyncIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SyncIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SyncIcon.Style = SvgIcon;
SyncIcon.displayName = 'SyncIcon';

export default SyncIcon
