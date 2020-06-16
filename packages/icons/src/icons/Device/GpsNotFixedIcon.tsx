import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GpsNotFixedIconSvg from '../../assets/Device/gps_not_fixed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GpsNotFixedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GpsNotFixedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GpsNotFixedIcon.Style = SvgIcon;
GpsNotFixedIcon.displayName = 'GpsNotFixedIcon';

export default GpsNotFixedIcon
