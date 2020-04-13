import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermIdentityIconSvg from '../../assets/Action/perm_identity_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermIdentityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PermIdentityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PermIdentityIcon.Style = SvgIcon;
PermIdentityIcon.displayName = 'PermIdentityIcon';

export default PermIdentityIcon
