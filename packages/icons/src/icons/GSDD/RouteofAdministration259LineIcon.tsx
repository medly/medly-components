import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import RouteofAdministration259LineIconSvg from '../../assets/GSDD/RouteofAdministration_259_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration259LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration259LineIcon';

const RouteofAdministration259LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RouteofAdministration259LineIcon;
