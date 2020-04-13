import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RepeatOneIconSvg from '../../assets/Media/repeat_one_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RepeatOneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RepeatOneIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RepeatOneIcon.Style = SvgIcon;
RepeatOneIcon.displayName = 'RepeatOneIcon';

export default RepeatOneIcon
