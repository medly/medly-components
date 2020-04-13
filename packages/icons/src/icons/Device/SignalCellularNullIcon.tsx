import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SignalCellularNullIconSvg from '../../assets/Device/signal_cellular_null_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SignalCellularNullIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SignalCellularNullIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SignalCellularNullIcon.Style = SvgIcon;
SignalCellularNullIcon.displayName = 'SignalCellularNullIcon';

export default SignalCellularNullIcon
