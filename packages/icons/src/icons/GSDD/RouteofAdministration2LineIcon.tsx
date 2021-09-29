import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration2LineIconSvg from '../../assets/GSDD/RouteofAdministration_2_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration2LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration2LineIcon';

const RouteofAdministration2LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default RouteofAdministration2LineIcon
