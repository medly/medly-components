import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClearAllIconSvg from '../../assets/Communication/clear_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClearAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClearAllIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClearAllIcon.Style = SvgIcon;
ClearAllIcon.displayName = 'ClearAllIcon';

export default ClearAllIcon
