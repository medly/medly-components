import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirplanemodeActiveIconSvg from '../../assets/Device/airplanemode_active_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirplanemodeActiveIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirplanemodeActiveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirplanemodeActiveIcon.Style = SvgIcon;
AirplanemodeActiveIcon.displayName = 'AirplanemodeActiveIcon';

export default AirplanemodeActiveIcon
