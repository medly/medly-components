import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OpacityIconSvg from '../../assets/Action/opacity_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpacityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OpacityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OpacityIcon.Style = SvgIcon;
OpacityIcon.displayName = 'OpacityIcon';

export default OpacityIcon
