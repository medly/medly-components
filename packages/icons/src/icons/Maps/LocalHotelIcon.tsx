import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalHotelIconSvg from '../../assets/Maps/local_hotel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalHotelIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalHotelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalHotelIcon.Style = SvgIcon;
LocalHotelIcon.displayName = 'LocalHotelIcon';

export default LocalHotelIcon
