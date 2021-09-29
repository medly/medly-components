import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration3LineIconSvg from '../../assets/GSDD/RouteofAdministration_3_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration3LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration3LineIcon';

const RouteofAdministration3LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default RouteofAdministration3LineIcon
