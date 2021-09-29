import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration393LineIconSvg from '../../assets/GSDD/RouteofAdministration_393_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration393LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration393LineIcon';

const RouteofAdministration393LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default RouteofAdministration393LineIcon
