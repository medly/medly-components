import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccountCircleIconSvg from '../../assets/Action/account_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccountCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccountCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccountCircleIcon.Style = SvgIcon;
AccountCircleIcon.displayName = 'AccountCircleIcon';

export default AccountCircleIcon
