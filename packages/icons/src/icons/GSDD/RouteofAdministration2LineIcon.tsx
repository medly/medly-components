import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration2LineIconSvg from '../../assets/GSDD/RouteofAdministration_2_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration2LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration2LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration2LineIcon.Style = SvgIcon;
RouteofAdministration2LineIcon.displayName = 'RouteofAdministration2LineIcon';

export default RouteofAdministration2LineIcon
