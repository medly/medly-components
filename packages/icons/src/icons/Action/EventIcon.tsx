import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EventIconSvg from '../../assets/Action/event_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EventIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EventIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EventIcon.Style = SvgIcon;
EventIcon.displayName = 'EventIcon';

export default EventIcon
