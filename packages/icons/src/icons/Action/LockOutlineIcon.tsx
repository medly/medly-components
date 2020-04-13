import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LockOutlineIconSvg from '../../assets/Action/lock_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LockOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LockOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LockOutlineIcon.Style = SvgIcon;
LockOutlineIcon.displayName = 'LockOutlineIcon';

export default LockOutlineIcon
