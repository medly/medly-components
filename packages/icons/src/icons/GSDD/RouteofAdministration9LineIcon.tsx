import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RouteofAdministration9LineIconSvg from '../../assets/GSDD/RouteofAdministration_9_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RouteofAdministration9LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RouteofAdministration9LineIcon';

const RouteofAdministration9LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default RouteofAdministration9LineIcon
