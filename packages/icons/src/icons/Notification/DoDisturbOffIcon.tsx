import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DoDisturbOffIconSvg from '../../assets/Notification/do_disturb_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoDisturbOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoDisturbOffIcon.Style = SvgIcon;
DoDisturbOffIcon.displayName = 'DoDisturbOffIcon';

export default DoDisturbOffIcon
