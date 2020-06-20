import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PowerIconSvg from '../../assets/Notification/power_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PowerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PowerIcon.Style = SvgIcon;
PowerIcon.displayName = 'PowerIcon';

export default PowerIcon
