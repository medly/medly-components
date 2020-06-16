import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GpsOffIconSvg from '../../assets/Device/gps_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GpsOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GpsOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GpsOffIcon.Style = SvgIcon;
GpsOffIcon.displayName = 'GpsOffIcon';

export default GpsOffIcon
