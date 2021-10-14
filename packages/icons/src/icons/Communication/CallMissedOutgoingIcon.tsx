import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CallMissedOutgoingIconSvg from '../../assets/Communication/call_missed_outgoing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CallMissedOutgoingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'CallMissedOutgoingIcon';

const CallMissedOutgoingIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default CallMissedOutgoingIcon;
