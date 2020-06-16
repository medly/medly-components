import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MailOutlineIconSvg from '../../assets/Communication/mail_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MailOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MailOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MailOutlineIcon.Style = SvgIcon;
MailOutlineIcon.displayName = 'MailOutlineIcon';

export default MailOutlineIcon
