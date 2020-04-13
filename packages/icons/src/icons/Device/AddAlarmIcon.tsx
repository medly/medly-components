import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AddAlarmIconSvg from '../../assets/Device/add_alarm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddAlarmIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddAlarmIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddAlarmIcon.Style = SvgIcon;
AddAlarmIcon.displayName = 'AddAlarmIcon';

export default AddAlarmIcon
