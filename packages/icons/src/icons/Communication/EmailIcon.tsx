import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EmailIconSvg from '../../assets/Communication/email_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EmailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EmailIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EmailIcon.Style = SvgIcon;
EmailIcon.displayName = 'EmailIcon';

export default EmailIcon
