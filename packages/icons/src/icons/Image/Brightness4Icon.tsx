import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import Brightness4IconSvg from '../../assets/Image/brightness_4_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <Brightness4IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Brightness4Icon';

const Brightness4Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default Brightness4Icon;
