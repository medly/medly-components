import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration238LineIconSvg from '../../assets/GSDD/RouteofAdministration_238_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration238LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration238LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration238LineIcon.Style = SvgIcon;
RouteofAdministration238LineIcon.displayName = 'RouteofAdministration238LineIcon';

export default RouteofAdministration238LineIcon
