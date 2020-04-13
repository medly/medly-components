import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EjectIconSvg from '../../assets/Action/eject_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EjectIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <EjectIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

EjectIcon.Style = SvgIcon;
EjectIcon.displayName = 'EjectIcon';

export default EjectIcon
