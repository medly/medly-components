import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CallEndIconSvg from '../../assets/Communication/call_end_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallEndIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CallEndIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CallEndIcon.Style = SvgIcon;
CallEndIcon.displayName = 'CallEndIcon';

export default CallEndIcon
