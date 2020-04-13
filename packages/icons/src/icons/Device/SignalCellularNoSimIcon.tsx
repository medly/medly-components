import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalCellularNoSimIconSvg from '../../assets/Device/signal_cellular_no_sim_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularNoSimIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalCellularNoSimIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalCellularNoSimIcon.Style = SvgIcon;
SignalCellularNoSimIcon.displayName = 'SignalCellularNoSimIcon';

export default SignalCellularNoSimIcon
