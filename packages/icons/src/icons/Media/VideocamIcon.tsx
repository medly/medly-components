import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideocamIconSvg from '../../assets/Media/videocam_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideocamIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VideocamIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VideocamIcon.Style = SvgIcon;
VideocamIcon.displayName = 'VideocamIcon';

export default VideocamIcon
