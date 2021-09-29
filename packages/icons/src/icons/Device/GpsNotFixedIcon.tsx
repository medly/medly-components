import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GpsNotFixedIconSvg from '../../assets/Device/gps_not_fixed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GpsNotFixedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'GpsNotFixedIcon';

const GpsNotFixedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default GpsNotFixedIcon
