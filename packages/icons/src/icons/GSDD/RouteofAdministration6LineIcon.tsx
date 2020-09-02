import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration6LineIconSvg from '../../assets/GSDD/RouteofAdministration_6_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration6LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration6LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration6LineIcon.Style = SvgIcon;
RouteofAdministration6LineIcon.displayName = 'RouteofAdministration6LineIcon';

export default RouteofAdministration6LineIcon
