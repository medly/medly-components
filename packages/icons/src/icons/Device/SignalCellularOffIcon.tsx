import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalCellularOffIconSvg from '../../assets/Device/signal_cellular_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalCellularOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalCellularOffIcon.Style = SvgIcon;
SignalCellularOffIcon.displayName = 'SignalCellularOffIcon';

export default SignalCellularOffIcon
