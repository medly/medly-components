import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WebIconSvg from '../../assets/Media/web_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WebIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WebIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WebIcon.Style = SvgIcon;
WebIcon.displayName = 'WebIcon';

export default WebIcon
