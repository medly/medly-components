import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbUpIconSvg from '../../assets/Action/thumb_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ThumbUpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ThumbUpIcon.Style = SvgIcon;
ThumbUpIcon.displayName = 'ThumbUpIcon';

export default ThumbUpIcon
