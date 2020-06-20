import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SignalCellularNoSimIconSvg from '../../assets/Device/signal_cellular_no_sim_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularNoSimIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalCellularNoSimIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalCellularNoSimIcon.Style = SvgIcon;
SignalCellularNoSimIcon.displayName = 'SignalCellularNoSimIcon';

export default SignalCellularNoSimIcon
