import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScreenLockPortraitIconSvg from '../../assets/Device/screen_lock_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenLockPortraitIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScreenLockPortraitIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScreenLockPortraitIcon.Style = SvgIcon;
ScreenLockPortraitIcon.displayName = 'ScreenLockPortraitIcon';

export default ScreenLockPortraitIcon
