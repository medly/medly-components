import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import OpenInBrowserIconSvg from '../../assets/Action/open_in_browser_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpenInBrowserIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OpenInBrowserIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

OpenInBrowserIcon.Style = SvgIcon;
OpenInBrowserIcon.displayName = 'OpenInBrowserIcon';

export default OpenInBrowserIcon
