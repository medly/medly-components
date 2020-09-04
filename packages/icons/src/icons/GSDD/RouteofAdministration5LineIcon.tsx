import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration5LineIconSvg from '../../assets/GSDD/RouteofAdministration_5_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration5LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration5LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration5LineIcon.Style = SvgIcon;
RouteofAdministration5LineIcon.displayName = 'RouteofAdministration5LineIcon';

export default RouteofAdministration5LineIcon
