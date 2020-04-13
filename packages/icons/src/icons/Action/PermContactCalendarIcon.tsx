import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PermContactCalendarIconSvg from '../../assets/Action/perm_contact_calendar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PermContactCalendarIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermContactCalendarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PermContactCalendarIcon.Style = SvgIcon;
PermContactCalendarIcon.displayName = 'PermContactCalendarIcon';

export default PermContactCalendarIcon
