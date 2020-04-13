import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RvHookupIconSvg from '../../assets/Places/rv_hookup_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RvHookupIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RvHookupIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RvHookupIcon.Style = SvgIcon;
RvHookupIcon.displayName = 'RvHookupIcon';

export default RvHookupIcon
