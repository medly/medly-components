import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FavoriteIconSvg from '../../assets/Action/favorite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FavoriteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FavoriteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FavoriteIcon.Style = SvgIcon;
FavoriteIcon.displayName = 'FavoriteIcon';

export default FavoriteIcon
