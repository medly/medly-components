import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MyLocationIconSvg from '../../assets/Maps/my_location_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MyLocationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MyLocationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MyLocationIcon.Style = SvgIcon;
MyLocationIcon.displayName = 'MyLocationIcon';

export default MyLocationIcon
