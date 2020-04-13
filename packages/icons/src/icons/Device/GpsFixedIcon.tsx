import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GpsFixedIconSvg from '../../assets/Device/gps_fixed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GpsFixedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GpsFixedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GpsFixedIcon.Style = SvgIcon;
GpsFixedIcon.displayName = 'GpsFixedIcon';

export default GpsFixedIcon
