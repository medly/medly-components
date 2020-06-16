import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DirectionsWalkIconSvg from '../../assets/Maps/directions_walk_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsWalkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsWalkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsWalkIcon.Style = SvgIcon;
DirectionsWalkIcon.displayName = 'DirectionsWalkIcon';

export default DirectionsWalkIcon
