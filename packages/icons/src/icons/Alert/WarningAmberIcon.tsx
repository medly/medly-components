import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WarningAmberIconSvg from '../../assets/Alert/warning_amber_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningAmberIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WarningAmberIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WarningAmberIcon.Style = SvgIcon;
WarningAmberIcon.displayName = 'WarningAmberIcon';

export default WarningAmberIcon
