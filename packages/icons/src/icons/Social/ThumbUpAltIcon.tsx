import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbUpAltIconSvg from '../../assets/Social/thumb_up_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbUpAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ThumbUpAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ThumbUpAltIcon.Style = SvgIcon;
ThumbUpAltIcon.displayName = 'ThumbUpAltIcon';

export default ThumbUpAltIcon
