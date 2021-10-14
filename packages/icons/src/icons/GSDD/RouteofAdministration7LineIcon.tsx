import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration7LineIconSvg from '../../assets/GSDD/RouteofAdministration_7_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration7LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration7LineIcon';

const RouteofAdministration7LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RouteofAdministration7LineIcon;
