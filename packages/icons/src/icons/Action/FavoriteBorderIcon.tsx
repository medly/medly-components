import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FavoriteBorderIconSvg from '../../assets/Action/favorite_border_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FavoriteBorderIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FavoriteBorderIcon';

const FavoriteBorderIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FavoriteBorderIcon;
