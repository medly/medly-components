import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NoEncryptionGmailerrorredIconSvg from '../../assets/Notification/no_encryption_gmailerrorred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoEncryptionGmailerrorredIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoEncryptionGmailerrorredIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NoEncryptionGmailerrorredIcon.Style = SvgIcon;
NoEncryptionGmailerrorredIcon.displayName = 'NoEncryptionGmailerrorredIcon';

export default NoEncryptionGmailerrorredIcon
