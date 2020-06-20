import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DoDisturbAltIconSvg from '../../assets/Notification/do_disturb_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbAltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoDisturbAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoDisturbAltIcon.Style = SvgIcon;
DoDisturbAltIcon.displayName = 'DoDisturbAltIcon';

export default DoDisturbAltIcon
