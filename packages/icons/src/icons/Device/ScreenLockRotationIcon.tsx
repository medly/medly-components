import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScreenLockRotationIconSvg from '../../assets/Device/screen_lock_rotation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenLockRotationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ScreenLockRotationIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ScreenLockRotationIcon.Style = SvgIcon;
ScreenLockRotationIcon.displayName = 'ScreenLockRotationIcon';

export default ScreenLockRotationIcon
