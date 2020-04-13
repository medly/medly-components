import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoneyOffCsredIconSvg from '../../assets/Editor/money_off_csred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoneyOffCsredIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoneyOffCsredIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoneyOffCsredIcon.Style = SvgIcon;
MoneyOffCsredIcon.displayName = 'MoneyOffCsredIcon';

export default MoneyOffCsredIcon
