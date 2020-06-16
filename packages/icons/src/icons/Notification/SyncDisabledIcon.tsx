import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SyncDisabledIconSvg from '../../assets/Notification/sync_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SyncDisabledIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SyncDisabledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SyncDisabledIcon.Style = SvgIcon;
SyncDisabledIcon.displayName = 'SyncDisabledIcon';

export default SyncDisabledIcon
