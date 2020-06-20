import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HotelIconSvg from '../../assets/Maps/hotel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HotelIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HotelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HotelIcon.Style = SvgIcon;
HotelIcon.displayName = 'HotelIcon';

export default HotelIcon
