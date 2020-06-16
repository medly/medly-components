import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ContactMailIconSvg from '../../assets/Communication/contact_mail_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ContactMailIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ContactMailIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ContactMailIcon.Style = SvgIcon;
ContactMailIcon.displayName = 'ContactMailIcon';

export default ContactMailIcon
