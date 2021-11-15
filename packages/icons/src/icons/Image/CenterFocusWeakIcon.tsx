import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import CenterFocusWeakIconSvg from '../../assets/Image/center_focus_weak_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CenterFocusWeakIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'CenterFocusWeakIcon';

const CenterFocusWeakIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default CenterFocusWeakIcon;
