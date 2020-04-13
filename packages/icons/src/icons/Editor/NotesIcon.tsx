import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NotesIconSvg from '../../assets/Editor/notes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NotesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NotesIcon.Style = SvgIcon;
NotesIcon.displayName = 'NotesIcon';

export default NotesIcon
