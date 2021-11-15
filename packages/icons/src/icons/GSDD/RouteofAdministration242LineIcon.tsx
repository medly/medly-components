import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import RouteofAdministration242LineIconSvg from '../../assets/GSDD/RouteofAdministration_242_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration242LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration242LineIcon';

const RouteofAdministration242LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RouteofAdministration242LineIcon;
