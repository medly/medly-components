import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import OpenInBrowserIconSvg from '../../assets/Action/open_in_browser_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OpenInBrowserIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'OpenInBrowserIcon';

const OpenInBrowserIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default OpenInBrowserIcon
