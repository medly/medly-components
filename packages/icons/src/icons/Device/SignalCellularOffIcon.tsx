import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalCellularOffIconSvg from '../../assets/Device/signal_cellular_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalCellularOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalCellularOffIcon.Style = SvgIcon;
SignalCellularOffIcon.displayName = 'SignalCellularOffIcon';

export default SignalCellularOffIcon
