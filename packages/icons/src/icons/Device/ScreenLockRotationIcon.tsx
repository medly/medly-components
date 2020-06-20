import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScreenLockRotationIconSvg from '../../assets/Device/screen_lock_rotation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenLockRotationIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScreenLockRotationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScreenLockRotationIcon.Style = SvgIcon;
ScreenLockRotationIcon.displayName = 'ScreenLockRotationIcon';

export default ScreenLockRotationIcon
