import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SystemVerticalAltIconSvg from '../../assets/Action/system_vertical_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SystemVerticalAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SystemVerticalAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SystemVerticalAltIcon.Style = SvgIcon;
SystemVerticalAltIcon.displayName = 'SystemVerticalAltIcon';

export default SystemVerticalAltIcon
