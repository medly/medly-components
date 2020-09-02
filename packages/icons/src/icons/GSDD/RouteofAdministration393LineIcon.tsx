import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration393LineIconSvg from '../../assets/GSDD/RouteofAdministration_393_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration393LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration393LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration393LineIcon.Style = SvgIcon;
RouteofAdministration393LineIcon.displayName = 'RouteofAdministration393LineIcon';

export default RouteofAdministration393LineIcon
