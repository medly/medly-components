import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalCellularAltIconSvg from '../../assets/Device/signal_cellular_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SignalCellularAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SignalCellularAltIcon.Style = SvgIcon;
SignalCellularAltIcon.displayName = 'SignalCellularAltIcon';

export default SignalCellularAltIcon
