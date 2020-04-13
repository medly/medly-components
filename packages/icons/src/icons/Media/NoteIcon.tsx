import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NoteIconSvg from '../../assets/Media/note_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NoteIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NoteIcon.Style = SvgIcon;
NoteIcon.displayName = 'NoteIcon';

export default NoteIcon
