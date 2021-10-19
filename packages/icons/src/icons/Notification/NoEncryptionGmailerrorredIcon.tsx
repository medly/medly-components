import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NoEncryptionGmailerrorredIconSvg from '../../assets/Notification/no_encryption_gmailerrorred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoEncryptionGmailerrorredIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'NoEncryptionGmailerrorredIcon';

const NoEncryptionGmailerrorredIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default NoEncryptionGmailerrorredIcon;
