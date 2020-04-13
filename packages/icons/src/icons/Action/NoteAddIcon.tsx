import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NoteAddIconSvg from '../../assets/Action/note_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoteAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NoteAddIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NoteAddIcon.Style = SvgIcon;
NoteAddIcon.displayName = 'NoteAddIcon';

export default NoteAddIcon
