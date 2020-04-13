import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ContactsIconSvg from '../../assets/Communication/contacts_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContactsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ContactsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ContactsIcon.Style = SvgIcon;
ContactsIcon.displayName = 'ContactsIcon';

export default ContactsIcon
