import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AdbIconSvg from '../../assets/Notification/adb_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AdbIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AdbIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AdbIcon.Style = SvgIcon;
AdbIcon.displayName = 'AdbIcon';

export default AdbIcon
