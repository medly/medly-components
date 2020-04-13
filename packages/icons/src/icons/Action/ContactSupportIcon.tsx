import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ContactSupportIconSvg from '../../assets/Action/contact_support_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContactSupportIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ContactSupportIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ContactSupportIcon.Style = SvgIcon;
ContactSupportIcon.displayName = 'ContactSupportIcon';

export default ContactSupportIcon
