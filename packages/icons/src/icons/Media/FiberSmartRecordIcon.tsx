import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FiberSmartRecordIconSvg from '../../assets/Media/fiber_smart_record_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FiberSmartRecordIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FiberSmartRecordIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FiberSmartRecordIcon.Style = SvgIcon;
FiberSmartRecordIcon.displayName = 'FiberSmartRecordIcon';

export default FiberSmartRecordIcon
