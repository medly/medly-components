import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CenterFocusWeakIconSvg from '../../assets/Image/center_focus_weak_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CenterFocusWeakIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CenterFocusWeakIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CenterFocusWeakIcon.Style = SvgIcon;
CenterFocusWeakIcon.displayName = 'CenterFocusWeakIcon';

export default CenterFocusWeakIcon
