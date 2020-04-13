import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsIconSvg from '../../assets/Maps/directions_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsIcon.Style = SvgIcon;
DirectionsIcon.displayName = 'DirectionsIcon';

export default DirectionsIcon
