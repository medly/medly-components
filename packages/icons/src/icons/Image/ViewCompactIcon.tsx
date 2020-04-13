import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewCompactIconSvg from '../../assets/Image/view_compact_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewCompactIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewCompactIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewCompactIcon.Style = SvgIcon;
ViewCompactIcon.displayName = 'ViewCompactIcon';

export default ViewCompactIcon
