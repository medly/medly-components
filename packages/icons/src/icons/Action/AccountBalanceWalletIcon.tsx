import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import AccountBalanceWalletIconSvg from '../../assets/Action/account_balance_wallet_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const {
        size,
        withHoverEffect,
        color,
        margin,
        iconColor: $iconColor,
        bgColor: $bgColor,
        hoverIconColor: $hoverIconColor,
        hoverBgColor: $hoverBgColor,
        ...restProps
    } = props;
    return (
        <SvgIcon
            {...{
                size,
                withHoverEffect,
                color,
                margin,
                $iconColor,
                $bgColor,
                $hoverIconColor,
                $hoverBgColor,
                ...restProps
            }}
        >
            <AccountBalanceWalletIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AccountBalanceWalletIcon';

const AccountBalanceWalletIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AccountBalanceWalletIcon;
