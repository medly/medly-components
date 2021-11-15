import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import AirlineSeatReclineNormalIconSvg from '../../assets/Notification/airline_seat_recline_normal_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatReclineNormalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AirlineSeatReclineNormalIcon';

const AirlineSeatReclineNormalIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default AirlineSeatReclineNormalIcon;
