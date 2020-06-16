import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NoEncryptionIconSvg from '../../assets/Notification/no_encryption_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoEncryptionIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoEncryptionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NoEncryptionIcon.Style = SvgIcon;
NoEncryptionIcon.displayName = 'NoEncryptionIcon';

export default NoEncryptionIcon
