import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoneyIconSvg from '../../assets/Maps/money_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoneyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoneyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoneyIcon.Style = SvgIcon;
MoneyIcon.displayName = 'MoneyIcon';

export default MoneyIcon
