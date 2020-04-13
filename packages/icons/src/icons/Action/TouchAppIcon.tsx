import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TouchAppIconSvg from '../../assets/Action/touch_app_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TouchAppIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <TouchAppIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

TouchAppIcon.Style = SvgIcon;
TouchAppIcon.displayName = 'TouchAppIcon';

export default TouchAppIcon
