import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlarmIconSvg from '../../assets/Action/alarm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AlarmIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AlarmIcon.Style = SvgIcon;
AlarmIcon.displayName = 'AlarmIcon';

export default AlarmIcon
