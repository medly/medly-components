import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ContactPhoneIconSvg from '../../assets/Communication/contact_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContactPhoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ContactPhoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ContactPhoneIcon.Style = SvgIcon;
ContactPhoneIcon.displayName = 'ContactPhoneIcon';

export default ContactPhoneIcon
