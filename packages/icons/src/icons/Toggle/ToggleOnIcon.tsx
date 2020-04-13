import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ToggleOnIconSvg from '../../assets/Toggle/toggle_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ToggleOnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ToggleOnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ToggleOnIcon.Style = SvgIcon;
ToggleOnIcon.displayName = 'ToggleOnIcon';

export default ToggleOnIcon
