import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DesktopAccessDisabledIconSvg from '../../assets/Communication/desktop_access_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DesktopAccessDisabledIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DesktopAccessDisabledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DesktopAccessDisabledIcon.Style = SvgIcon;
DesktopAccessDisabledIcon.displayName = 'DesktopAccessDisabledIcon';

export default DesktopAccessDisabledIcon
