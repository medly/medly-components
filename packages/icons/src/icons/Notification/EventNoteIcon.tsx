import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EventNoteIconSvg from '../../assets/Notification/event_note_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventNoteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EventNoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EventNoteIcon.Style = SvgIcon;
EventNoteIcon.displayName = 'EventNoteIcon';

export default EventNoteIcon
