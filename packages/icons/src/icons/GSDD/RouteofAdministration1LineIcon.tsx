import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration1LineIconSvg from '../../assets/GSDD/RouteofAdministration_1_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration1LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration1LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration1LineIcon.Style = SvgIcon;
RouteofAdministration1LineIcon.displayName = 'RouteofAdministration1LineIcon';

export default RouteofAdministration1LineIcon
