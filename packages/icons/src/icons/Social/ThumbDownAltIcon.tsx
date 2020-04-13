import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbDownAltIconSvg from '../../assets/Social/thumb_down_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbDownAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ThumbDownAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ThumbDownAltIcon.Style = SvgIcon;
ThumbDownAltIcon.displayName = 'ThumbDownAltIcon';

export default ThumbDownAltIcon
