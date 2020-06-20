import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalPhoneIconSvg from '../../assets/Maps/local_phone_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPhoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalPhoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalPhoneIcon.Style = SvgIcon;
LocalPhoneIcon.displayName = 'LocalPhoneIcon';

export default LocalPhoneIcon
