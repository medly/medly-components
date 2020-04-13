import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DirectionsRunIconSvg from '../../assets/Maps/directions_run_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DirectionsRunIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DirectionsRunIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DirectionsRunIcon.Style = SvgIcon;
DirectionsRunIcon.displayName = 'DirectionsRunIcon';

export default DirectionsRunIcon
