import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ContactPhoneIconSvg from '../../assets/Communication/contact_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContactPhoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ContactPhoneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ContactPhoneIcon.Style = SvgIcon;
ContactPhoneIcon.displayName = 'ContactPhoneIcon';

export default ContactPhoneIcon
