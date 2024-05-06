import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';
import RotateRightIconSvg from '../../assets/Image/rotate_right_24px_rounded.svg';

const Component: FCC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <RotateRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RotateRightIcon';

const RotateRightIcon: FCC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RotateRightIcon;
