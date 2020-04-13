import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SystemUpdateIconSvg from '../../assets/Notification/system_update_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SystemUpdateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SystemUpdateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SystemUpdateIcon.Style = SvgIcon;
SystemUpdateIcon.displayName = 'SystemUpdateIcon';

export default SystemUpdateIcon
