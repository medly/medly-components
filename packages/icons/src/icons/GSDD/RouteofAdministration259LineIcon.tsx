import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration259LineIconSvg from '../../assets/GSDD/RouteofAdministration_259_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration259LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration259LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration259LineIcon.Style = SvgIcon;
RouteofAdministration259LineIcon.displayName = 'RouteofAdministration259LineIcon';

export default RouteofAdministration259LineIcon
