import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoneyOffIconSvg from '../../assets/Editor/money_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoneyOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoneyOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoneyOffIcon.Style = SvgIcon;
MoneyOffIcon.displayName = 'MoneyOffIcon';

export default MoneyOffIcon
