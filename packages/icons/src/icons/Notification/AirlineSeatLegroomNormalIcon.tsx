import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirlineSeatLegroomNormalIconSvg from '../../assets/Notification/airline_seat_legroom_normal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatLegroomNormalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AirlineSeatLegroomNormalIcon';

const AirlineSeatLegroomNormalIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AirlineSeatLegroomNormalIcon;
