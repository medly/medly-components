import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration4LineIconSvg from '../../assets/GSDD/RouteofAdministration_4_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration4LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration4LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration4LineIcon.Style = SvgIcon;
RouteofAdministration4LineIcon.displayName = 'RouteofAdministration4LineIcon';

export default RouteofAdministration4LineIcon
