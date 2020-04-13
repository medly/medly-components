import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoDisturbIconSvg from '../../assets/Notification/do_disturb_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoDisturbIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoDisturbIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoDisturbIcon.Style = SvgIcon;
DoDisturbIcon.displayName = 'DoDisturbIcon';

export default DoDisturbIcon
