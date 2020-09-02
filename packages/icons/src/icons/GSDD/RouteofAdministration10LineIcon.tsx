import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration10LineIconSvg from '../../assets/GSDD/RouteofAdministration_10_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration10LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration10LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration10LineIcon.Style = SvgIcon;
RouteofAdministration10LineIcon.displayName = 'RouteofAdministration10LineIcon';

export default RouteofAdministration10LineIcon
