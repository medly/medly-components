import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SettingsInputCompositeIconSvg from '../../assets/Action/settings_input_composite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputCompositeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsInputCompositeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsInputCompositeIcon.Style = SvgIcon;
SettingsInputCompositeIcon.displayName = 'SettingsInputCompositeIcon';

export default SettingsInputCompositeIcon
