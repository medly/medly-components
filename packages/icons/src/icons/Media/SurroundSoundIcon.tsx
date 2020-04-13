import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SurroundSoundIconSvg from '../../assets/Media/surround_sound_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SurroundSoundIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SurroundSoundIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SurroundSoundIcon.Style = SvgIcon;
SurroundSoundIcon.displayName = 'SurroundSoundIcon';

export default SurroundSoundIcon
