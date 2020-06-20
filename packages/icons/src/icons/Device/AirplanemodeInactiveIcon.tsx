import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirplanemodeInactiveIconSvg from '../../assets/Device/airplanemode_inactive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirplanemodeInactiveIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirplanemodeInactiveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirplanemodeInactiveIcon.Style = SvgIcon;
AirplanemodeInactiveIcon.displayName = 'AirplanemodeInactiveIcon';

export default AirplanemodeInactiveIcon
