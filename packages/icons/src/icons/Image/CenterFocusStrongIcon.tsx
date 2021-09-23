import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CenterFocusStrongIconSvg from '../../assets/Image/center_focus_strong_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CenterFocusStrongIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'CenterFocusStrongIcon';

const CenterFocusStrongIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default CenterFocusStrongIcon
