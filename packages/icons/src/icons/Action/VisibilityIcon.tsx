import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilityIconSvg from '../../assets/Action/visibility_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VisibilityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VisibilityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VisibilityIcon.Style = SvgIcon;
VisibilityIcon.displayName = 'VisibilityIcon';

export default VisibilityIcon
