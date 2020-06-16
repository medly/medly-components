import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AlarmOffIconSvg from '../../assets/Action/alarm_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AlarmOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AlarmOffIcon.Style = SvgIcon;
AlarmOffIcon.displayName = 'AlarmOffIcon';

export default AlarmOffIcon
