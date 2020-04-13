import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FavoriteBorderIconSvg from '../../assets/Action/favorite_border_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FavoriteBorderIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FavoriteBorderIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FavoriteBorderIcon.Style = SvgIcon;
FavoriteBorderIcon.displayName = 'FavoriteBorderIcon';

export default FavoriteBorderIcon
