import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WarningIconSvg from '../../assets/Alert/warning_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WarningIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WarningIcon.Style = SvgIcon;
WarningIcon.displayName = 'WarningIcon';

export default WarningIcon
