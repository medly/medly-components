import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SwitchVideoIconSvg from '../../assets/Image/switch_video_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SwitchVideoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SwitchVideoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SwitchVideoIcon.Style = SvgIcon;
SwitchVideoIcon.displayName = 'SwitchVideoIcon';

export default SwitchVideoIcon
