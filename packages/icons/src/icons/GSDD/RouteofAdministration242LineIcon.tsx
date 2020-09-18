import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration242LineIconSvg from '../../assets/GSDD/RouteofAdministration_242_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration242LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration242LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration242LineIcon.Style = SvgIcon;
RouteofAdministration242LineIcon.displayName = 'RouteofAdministration242LineIcon';

export default RouteofAdministration242LineIcon
