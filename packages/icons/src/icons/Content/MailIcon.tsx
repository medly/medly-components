import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MailIconSvg from '../../assets/Content/mail_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MailIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MailIcon.Style = SvgIcon;
MailIcon.displayName = 'MailIcon';

export default MailIcon
