import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AccountBoxIconSvg from '../../assets/Action/account_box_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountBoxIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccountBoxIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccountBoxIcon.Style = SvgIcon;
AccountBoxIcon.displayName = 'AccountBoxIcon';

export default AccountBoxIcon
