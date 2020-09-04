import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration8LineIconSvg from '../../assets/GSDD/RouteofAdministration_8_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration8LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration8LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration8LineIcon.Style = SvgIcon;
RouteofAdministration8LineIcon.displayName = 'RouteofAdministration8LineIcon';

export default RouteofAdministration8LineIcon
