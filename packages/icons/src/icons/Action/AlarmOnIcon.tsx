import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlarmOnIconSvg from '../../assets/Action/alarm_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AlarmOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AlarmOnIcon.Style = SvgIcon;
AlarmOnIcon.displayName = 'AlarmOnIcon';

export default AlarmOnIcon
