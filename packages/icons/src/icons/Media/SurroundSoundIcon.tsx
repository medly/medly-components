import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SurroundSoundIconSvg from '../../assets/Media/surround_sound_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SurroundSoundIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SurroundSoundIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SurroundSoundIcon.Style = SvgIcon;
SurroundSoundIcon.displayName = 'SurroundSoundIcon';

export default SurroundSoundIcon
