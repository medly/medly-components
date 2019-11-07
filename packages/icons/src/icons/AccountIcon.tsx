// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AccountSvg from '../assets/Account.svg';
import SvgIcon, { Props } from '../SvgIcon';

export const AccountIcon: SFC<Props> & WithStyle = props => (
    <SvgIcon {...props}>
        <AccountSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

AccountIcon.Style = SvgIcon;
AccountIcon.displayName = 'AccountIcon';
