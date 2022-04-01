import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import SideEffect1709305LineIconSvg from '../../assets/GSDD/SideEffect_1709_305_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const {
        size,
        withHoverEffect,
        color,
        margin,
        iconColor: $iconColor,
        bgColor: $bgColor,
        hoverIconColor: $hoverIconColor,
        hoverBgColor: $hoverBgColor,
        ...restProps
    } = props;
    return (
        <SvgIcon
            {...{
                size,
                withHoverEffect,
                color,
                margin,
                $iconColor,
                $bgColor,
                $hoverIconColor,
                $hoverBgColor,
                ...restProps
            }}
        >
            <SideEffect1709305LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect1709305LineIcon';

const SideEffect1709305LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect1709305LineIcon;
