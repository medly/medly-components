import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration9LineIconSvg from '../../assets/GSDD/RouteofAdministration_9_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RouteofAdministration9LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration9LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RouteofAdministration9LineIcon.Style = SvgIcon;
RouteofAdministration9LineIcon.displayName = 'RouteofAdministration9LineIcon';

export default RouteofAdministration9LineIcon
