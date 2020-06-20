import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MusicNoteIconSvg from '../../assets/Image/music_note_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MusicNoteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MusicNoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MusicNoteIcon.Style = SvgIcon;
MusicNoteIcon.displayName = 'MusicNoteIcon';

export default MusicNoteIcon
