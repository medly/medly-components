import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import GpsNotFixedIconSvg from '../../assets/Device/gps_not_fixed_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <GpsNotFixedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'GpsNotFixedIcon';

const GpsNotFixedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default GpsNotFixedIcon;
