import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SnoozeIconSvg from '../../assets/Media/snooze_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SnoozeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SnoozeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SnoozeIcon.Style = SvgIcon;
SnoozeIcon.displayName = 'SnoozeIcon';

export default SnoozeIcon
