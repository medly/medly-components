import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BrightnessLowIconSvg from '../../assets/Device/brightness_low_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessLowIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrightnessLowIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BrightnessLowIcon.Style = SvgIcon;
BrightnessLowIcon.displayName = 'BrightnessLowIcon';

export default BrightnessLowIcon
