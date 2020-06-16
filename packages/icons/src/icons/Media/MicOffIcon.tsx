import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MicOffIconSvg from '../../assets/Media/mic_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MicOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MicOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MicOffIcon.Style = SvgIcon;
MicOffIcon.displayName = 'MicOffIcon';

export default MicOffIcon
