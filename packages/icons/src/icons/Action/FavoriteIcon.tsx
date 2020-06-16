import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FavoriteIconSvg from '../../assets/Action/favorite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FavoriteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FavoriteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FavoriteIcon.Style = SvgIcon;
FavoriteIcon.displayName = 'FavoriteIcon';

export default FavoriteIcon
