import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SdCardIconSvg from '../../assets/Notification/sd_card_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SdCardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SdCardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SdCardIcon.Style = SvgIcon;
SdCardIcon.displayName = 'SdCardIcon';

export default SdCardIcon
