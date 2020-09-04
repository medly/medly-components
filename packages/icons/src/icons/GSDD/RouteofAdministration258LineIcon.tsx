import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration258LineIconSvg from '../../assets/GSDD/RouteofAdministration_258_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration258LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration258LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration258LineIcon.Style = SvgIcon;
RouteofAdministration258LineIcon.displayName = 'RouteofAdministration258LineIcon';

export default RouteofAdministration258LineIcon
