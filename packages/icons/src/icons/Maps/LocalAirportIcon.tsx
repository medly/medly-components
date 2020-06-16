import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalAirportIconSvg from '../../assets/Maps/local_airport_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalAirportIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalAirportIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalAirportIcon.Style = SvgIcon;
LocalAirportIcon.displayName = 'LocalAirportIcon';

export default LocalAirportIcon
