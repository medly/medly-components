import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScreenLockPortraitIconSvg from '../../assets/Device/screen_lock_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScreenLockPortraitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ScreenLockPortraitIcon';

const ScreenLockPortraitIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ScreenLockPortraitIcon;
