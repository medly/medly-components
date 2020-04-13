import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ScreenRotationIconSvg from '../../assets/Device/screen_rotation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScreenRotationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScreenRotationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScreenRotationIcon.Style = SvgIcon;
ScreenRotationIcon.displayName = 'ScreenRotationIcon';

export default ScreenRotationIcon
