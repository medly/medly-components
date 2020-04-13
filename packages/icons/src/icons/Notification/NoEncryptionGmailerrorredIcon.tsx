import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NoEncryptionGmailerrorredIconSvg from '../../assets/Notification/no_encryption_gmailerrorred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoEncryptionGmailerrorredIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NoEncryptionGmailerrorredIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NoEncryptionGmailerrorredIcon.Style = SvgIcon;
NoEncryptionGmailerrorredIcon.displayName = 'NoEncryptionGmailerrorredIcon';

export default NoEncryptionGmailerrorredIcon
