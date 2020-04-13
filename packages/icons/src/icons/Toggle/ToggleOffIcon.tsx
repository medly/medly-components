import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ToggleOffIconSvg from '../../assets/Toggle/toggle_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ToggleOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ToggleOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ToggleOffIcon.Style = SvgIcon;
ToggleOffIcon.displayName = 'ToggleOffIcon';

export default ToggleOffIcon
