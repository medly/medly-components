import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallReceivedIconSvg from '../../assets/Communication/call_received_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallReceivedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CallReceivedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CallReceivedIcon.Style = SvgIcon;
CallReceivedIcon.displayName = 'CallReceivedIcon';

export default CallReceivedIcon
