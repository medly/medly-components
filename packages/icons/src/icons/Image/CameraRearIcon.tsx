import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CameraRearIconSvg from '../../assets/Image/camera_rear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraRearIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CameraRearIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CameraRearIcon.Style = SvgIcon;
CameraRearIcon.displayName = 'CameraRearIcon';

export default CameraRearIcon
