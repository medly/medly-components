import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DoDisturbOnIconSvg from '../../assets/Notification/do_disturb_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbOnIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoDisturbOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoDisturbOnIcon.Style = SvgIcon;
DoDisturbOnIcon.displayName = 'DoDisturbOnIcon';

export default DoDisturbOnIcon
