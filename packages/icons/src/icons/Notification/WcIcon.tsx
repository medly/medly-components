import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WcIconSvg from '../../assets/Notification/wc_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WcIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WcIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WcIcon.Style = SvgIcon;
WcIcon.displayName = 'WcIcon';

export default WcIcon
