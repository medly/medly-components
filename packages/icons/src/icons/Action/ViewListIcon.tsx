import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewListIconSvg from '../../assets/Action/view_list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewListIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewListIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewListIcon.Style = SvgIcon;
ViewListIcon.displayName = 'ViewListIcon';

export default ViewListIcon
