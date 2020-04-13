import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DeveloperModeIconSvg from '../../assets/Device/developer_mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeveloperModeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeveloperModeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeveloperModeIcon.Style = SvgIcon;
DeveloperModeIcon.displayName = 'DeveloperModeIcon';

export default DeveloperModeIcon
