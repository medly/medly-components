import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MicIconSvg from '../../assets/Media/mic_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MicIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MicIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MicIcon.Style = SvgIcon;
MicIcon.displayName = 'MicIcon';

export default MicIcon
