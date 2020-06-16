import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CameraFrontIconSvg from '../../assets/Image/camera_front_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CameraFrontIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CameraFrontIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CameraFrontIcon.Style = SvgIcon;
CameraFrontIcon.displayName = 'CameraFrontIcon';

export default CameraFrontIcon
