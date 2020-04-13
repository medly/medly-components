import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrightnessAutoIconSvg from '../../assets/Device/brightness_auto_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessAutoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrightnessAutoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BrightnessAutoIcon.Style = SvgIcon;
BrightnessAutoIcon.displayName = 'BrightnessAutoIcon';

export default BrightnessAutoIcon
