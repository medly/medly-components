import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GetAppIconSvg from '../../assets/Action/get_app_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GetAppIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GetAppIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GetAppIcon.Style = SvgIcon;
GetAppIcon.displayName = 'GetAppIcon';

export default GetAppIcon
