import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AlarmAddIconSvg from '../../assets/Action/alarm_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlarmAddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AlarmAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AlarmAddIcon.Style = SvgIcon;
AlarmAddIcon.displayName = 'AlarmAddIcon';

export default AlarmAddIcon
