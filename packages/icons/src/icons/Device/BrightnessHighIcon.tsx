import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrightnessHighIconSvg from '../../assets/Device/brightness_high_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessHighIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrightnessHighIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BrightnessHighIcon.Style = SvgIcon;
BrightnessHighIcon.displayName = 'BrightnessHighIcon';

export default BrightnessHighIcon
