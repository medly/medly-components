import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GifIconSvg from '../../assets/Action/gif_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GifIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GifIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GifIcon.Style = SvgIcon;
GifIcon.displayName = 'GifIcon';

export default GifIcon
