import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewColumnIconSvg from '../../assets/Action/view_column_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewColumnIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewColumnIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewColumnIcon.Style = SvgIcon;
ViewColumnIcon.displayName = 'ViewColumnIcon';

export default ViewColumnIcon
