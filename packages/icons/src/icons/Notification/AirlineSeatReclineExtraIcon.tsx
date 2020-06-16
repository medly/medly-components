import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirlineSeatReclineExtraIconSvg from '../../assets/Notification/airline_seat_recline_extra_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatReclineExtraIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatReclineExtraIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirlineSeatReclineExtraIcon.Style = SvgIcon;
AirlineSeatReclineExtraIcon.displayName = 'AirlineSeatReclineExtraIcon';

export default AirlineSeatReclineExtraIcon
