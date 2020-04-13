import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PhonelinkOffIconSvg from '../../assets/Hardware/phonelink_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PhonelinkOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PhonelinkOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PhonelinkOffIcon.Style = SvgIcon;
PhonelinkOffIcon.displayName = 'PhonelinkOffIcon';

export default PhonelinkOffIcon
