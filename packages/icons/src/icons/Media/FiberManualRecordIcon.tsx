import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberManualRecordIconSvg from '../../assets/Media/fiber_manual_record_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberManualRecordIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FiberManualRecordIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FiberManualRecordIcon.Style = SvgIcon;
FiberManualRecordIcon.displayName = 'FiberManualRecordIcon';

export default FiberManualRecordIcon
