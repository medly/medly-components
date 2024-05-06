import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';
import RouteofAdministration9LineIconSvg from '../../assets/GSDD/RouteofAdministration_9_Line.svg';

const Component: FCC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <RouteofAdministration9LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration9LineIcon';

const RouteofAdministration9LineIcon: FCC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RouteofAdministration9LineIcon;
