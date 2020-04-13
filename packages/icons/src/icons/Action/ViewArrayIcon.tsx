import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewArrayIconSvg from '../../assets/Action/view_array_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewArrayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewArrayIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewArrayIcon.Style = SvgIcon;
ViewArrayIcon.displayName = 'ViewArrayIcon';

export default ViewArrayIcon
