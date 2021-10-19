import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirlineSeatLegroomExtraIconSvg from '../../assets/Notification/airline_seat_legroom_extra_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatLegroomExtraIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AirlineSeatLegroomExtraIcon';

const AirlineSeatLegroomExtraIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AirlineSeatLegroomExtraIcon;
