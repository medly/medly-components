import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MinimizeIconSvg from '../../assets/Action/minimize_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MinimizeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MinimizeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MinimizeIcon.Style = SvgIcon;
MinimizeIcon.displayName = 'MinimizeIcon';

export default MinimizeIcon
