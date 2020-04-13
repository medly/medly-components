import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SmokingRoomsIconSvg from '../../assets/Places/smoking_rooms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmokingRoomsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SmokingRoomsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SmokingRoomsIcon.Style = SvgIcon;
SmokingRoomsIcon.displayName = 'SmokingRoomsIcon';

export default SmokingRoomsIcon
