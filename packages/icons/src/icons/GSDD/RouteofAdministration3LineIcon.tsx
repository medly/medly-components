import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration3LineIconSvg from '../../assets/GSDD/RouteofAdministration_3_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration3LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration3LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration3LineIcon.Style = SvgIcon;
RouteofAdministration3LineIcon.displayName = 'RouteofAdministration3LineIcon';

export default RouteofAdministration3LineIcon
