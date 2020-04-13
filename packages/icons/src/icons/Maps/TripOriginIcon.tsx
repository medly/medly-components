import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TripOriginIconSvg from '../../assets/Maps/trip_origin_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TripOriginIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TripOriginIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TripOriginIcon.Style = SvgIcon;
TripOriginIcon.displayName = 'TripOriginIcon';

export default TripOriginIcon
