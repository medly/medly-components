import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbDownIconSvg from '../../assets/Action/thumb_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ThumbDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ThumbDownIcon.Style = SvgIcon;
ThumbDownIcon.displayName = 'ThumbDownIcon';

export default ThumbDownIcon
