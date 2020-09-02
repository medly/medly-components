import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration266LineIconSvg from '../../assets/GSDD/Administration_266_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration266LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration266LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration266LineIcon.Style = SvgIcon;
Administration266LineIcon.displayName = 'Administration266LineIcon';

export default Administration266LineIcon
