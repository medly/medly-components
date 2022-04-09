import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import SideEffect3226393LineIconSvg from '../../assets/GSDD/SideEffect_3226_393_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <SideEffect3226393LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect3226393LineIcon';

const SideEffect3226393LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect3226393LineIcon;
