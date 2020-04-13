import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ThumbsUpDownIconSvg from '../../assets/Action/thumbs_up_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ThumbsUpDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ThumbsUpDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ThumbsUpDownIcon.Style = SvgIcon;
ThumbsUpDownIcon.displayName = 'ThumbsUpDownIcon';

export default ThumbsUpDownIcon
