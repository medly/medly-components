import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LinkedCameraIconSvg from '../../assets/Image/linked_camera_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinkedCameraIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LinkedCameraIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LinkedCameraIcon.Style = SvgIcon;
LinkedCameraIcon.displayName = 'LinkedCameraIcon';

export default LinkedCameraIcon
