import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import RadioButtonCheckedIconSvg from '../../assets/Toggle/radio_button_checked_24px_rounded.svg';
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
            <RadioButtonCheckedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RadioButtonCheckedIcon';

const RadioButtonCheckedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RadioButtonCheckedIcon;
