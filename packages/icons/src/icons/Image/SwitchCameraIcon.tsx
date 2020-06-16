import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SwitchCameraIconSvg from '../../assets/Image/switch_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwitchCameraIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwitchCameraIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SwitchCameraIcon.Style = SvgIcon;
SwitchCameraIcon.displayName = 'SwitchCameraIcon';

export default SwitchCameraIcon
