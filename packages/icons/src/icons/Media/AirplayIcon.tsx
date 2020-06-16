import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirplayIconSvg from '../../assets/Media/airplay_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirplayIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirplayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirplayIcon.Style = SvgIcon;
AirplayIcon.displayName = 'AirplayIcon';

export default AirplayIcon
