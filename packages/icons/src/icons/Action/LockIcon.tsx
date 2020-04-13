import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LockIconSvg from '../../assets/Action/lock_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LockIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LockIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LockIcon.Style = SvgIcon;
LockIcon.displayName = 'LockIcon';

export default LockIcon
