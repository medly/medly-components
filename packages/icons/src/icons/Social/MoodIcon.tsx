import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoodIconSvg from '../../assets/Social/mood_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoodIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MoodIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MoodIcon.Style = SvgIcon;
MoodIcon.displayName = 'MoodIcon';

export default MoodIcon
