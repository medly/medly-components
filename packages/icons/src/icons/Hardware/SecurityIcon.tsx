import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SecurityIconSvg from '../../assets/Hardware/security_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SecurityIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SecurityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SecurityIcon.Style = SvgIcon;
SecurityIcon.displayName = 'SecurityIcon';

export default SecurityIcon
