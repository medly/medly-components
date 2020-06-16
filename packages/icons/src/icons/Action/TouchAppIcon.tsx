import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TouchAppIconSvg from '../../assets/Action/touch_app_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TouchAppIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TouchAppIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TouchAppIcon.Style = SvgIcon;
TouchAppIcon.displayName = 'TouchAppIcon';

export default TouchAppIcon
