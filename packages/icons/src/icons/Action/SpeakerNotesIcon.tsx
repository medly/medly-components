import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SpeakerNotesIconSvg from '../../assets/Action/speaker_notes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpeakerNotesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpeakerNotesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpeakerNotesIcon.Style = SvgIcon;
SpeakerNotesIcon.displayName = 'SpeakerNotesIcon';

export default SpeakerNotesIcon
