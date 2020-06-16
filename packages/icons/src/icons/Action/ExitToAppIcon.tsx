import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExitToAppIconSvg from '../../assets/Action/exit_to_app_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExitToAppIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExitToAppIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExitToAppIcon.Style = SvgIcon;
ExitToAppIcon.displayName = 'ExitToAppIcon';

export default ExitToAppIcon
