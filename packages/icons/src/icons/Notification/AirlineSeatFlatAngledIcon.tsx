import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirlineSeatFlatAngledIconSvg from '../../assets/Notification/airline_seat_flat_angled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatFlatAngledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AirlineSeatFlatAngledIcon';

const AirlineSeatFlatAngledIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default AirlineSeatFlatAngledIcon
