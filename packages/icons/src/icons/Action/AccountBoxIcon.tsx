import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccountBoxIconSvg from '../../assets/Action/account_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountBoxIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AccountBoxIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AccountBoxIcon.Style = SvgIcon;
AccountBoxIcon.displayName = 'AccountBoxIcon';

export default AccountBoxIcon
