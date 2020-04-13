import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EmailIconSvg from '../../assets/Communication/email_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EmailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EmailIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EmailIcon.Style = SvgIcon;
EmailIcon.displayName = 'EmailIcon';

export default EmailIcon
