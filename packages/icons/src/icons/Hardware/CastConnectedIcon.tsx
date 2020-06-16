import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CastConnectedIconSvg from '../../assets/Hardware/cast_connected_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CastConnectedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CastConnectedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CastConnectedIcon.Style = SvgIcon;
CastConnectedIcon.displayName = 'CastConnectedIcon';

export default CastConnectedIcon
