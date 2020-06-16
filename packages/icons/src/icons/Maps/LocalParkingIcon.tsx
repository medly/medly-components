import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalParkingIconSvg from '../../assets/Maps/local_parking_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalParkingIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalParkingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalParkingIcon.Style = SvgIcon;
LocalParkingIcon.displayName = 'LocalParkingIcon';

export default LocalParkingIcon
