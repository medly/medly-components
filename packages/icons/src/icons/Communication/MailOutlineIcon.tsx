import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MailOutlineIconSvg from '../../assets/Communication/mail_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MailOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MailOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MailOutlineIcon.Style = SvgIcon;
MailOutlineIcon.displayName = 'MailOutlineIcon';

export default MailOutlineIcon
