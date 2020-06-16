import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FlashAutoIconSvg from '../../assets/Image/flash_auto_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlashAutoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlashAutoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlashAutoIcon.Style = SvgIcon;
FlashAutoIcon.displayName = 'FlashAutoIcon';

export default FlashAutoIcon
