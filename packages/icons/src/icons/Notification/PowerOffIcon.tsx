import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PowerOffIconSvg from '../../assets/Notification/power_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PowerOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PowerOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PowerOffIcon.Style = SvgIcon;
PowerOffIcon.displayName = 'PowerOffIcon';

export default PowerOffIcon
