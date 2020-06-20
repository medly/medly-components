import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DirectionsBikeIconSvg from '../../assets/Maps/directions_bike_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsBikeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsBikeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsBikeIcon.Style = SvgIcon;
DirectionsBikeIcon.displayName = 'DirectionsBikeIcon';

export default DirectionsBikeIcon
