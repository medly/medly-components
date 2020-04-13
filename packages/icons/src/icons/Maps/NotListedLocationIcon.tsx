import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotListedLocationIconSvg from '../../assets/Maps/not_listed_location_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotListedLocationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotListedLocationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotListedLocationIcon.Style = SvgIcon;
NotListedLocationIcon.displayName = 'NotListedLocationIcon';

export default NotListedLocationIcon
