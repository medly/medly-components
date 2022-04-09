import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import GifIconSvg from '../../assets/Action/gif_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <GifIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'GifIcon';

const GifIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default GifIcon;
