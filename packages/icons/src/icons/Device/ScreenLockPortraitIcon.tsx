import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScreenLockPortraitIconSvg from '../../assets/Device/screen_lock_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenLockPortraitIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScreenLockPortraitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScreenLockPortraitIcon.Style = SvgIcon;
ScreenLockPortraitIcon.displayName = 'ScreenLockPortraitIcon';

export default ScreenLockPortraitIcon
