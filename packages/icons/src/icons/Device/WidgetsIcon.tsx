import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WidgetsIconSvg from '../../assets/Device/widgets_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WidgetsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WidgetsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WidgetsIcon.Style = SvgIcon;
WidgetsIcon.displayName = 'WidgetsIcon';

export default WidgetsIcon
