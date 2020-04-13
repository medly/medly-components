import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DriveEtaIconSvg from '../../assets/Notification/drive_eta_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DriveEtaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DriveEtaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DriveEtaIcon.Style = SvgIcon;
DriveEtaIcon.displayName = 'DriveEtaIcon';

export default DriveEtaIcon
