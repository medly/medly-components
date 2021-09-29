import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PermCameraMicIconSvg from '../../assets/Action/perm_camera_mic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermCameraMicIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PermCameraMicIcon';

const PermCameraMicIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default PermCameraMicIcon
