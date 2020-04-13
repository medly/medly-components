import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ContactMailIconSvg from '../../assets/Communication/contact_mail_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContactMailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ContactMailIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ContactMailIcon.Style = SvgIcon;
ContactMailIcon.displayName = 'ContactMailIcon';

export default ContactMailIcon
