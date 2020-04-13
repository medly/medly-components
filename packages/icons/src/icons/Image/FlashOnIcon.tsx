import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FlashOnIconSvg from '../../assets/Image/flash_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FlashOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FlashOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FlashOnIcon.Style = SvgIcon;
FlashOnIcon.displayName = 'FlashOnIcon';

export default FlashOnIcon
