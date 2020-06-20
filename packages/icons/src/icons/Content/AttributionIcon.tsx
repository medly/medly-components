import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AttributionIconSvg from '../../assets/Content/attribution_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AttributionIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AttributionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AttributionIcon.Style = SvgIcon;
AttributionIcon.displayName = 'AttributionIcon';

export default AttributionIcon
