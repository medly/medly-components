import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WbCloudyIconSvg from '../../assets/Image/wb_cloudy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WbCloudyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WbCloudyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WbCloudyIcon.Style = SvgIcon;
WbCloudyIcon.displayName = 'WbCloudyIcon';

export default WbCloudyIcon
