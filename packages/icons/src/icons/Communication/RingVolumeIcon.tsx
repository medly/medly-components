import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RingVolumeIconSvg from '../../assets/Communication/ring_volume_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RingVolumeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RingVolumeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RingVolumeIcon.Style = SvgIcon;
RingVolumeIcon.displayName = 'RingVolumeIcon';

export default RingVolumeIcon
