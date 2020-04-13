import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewStreamIconSvg from '../../assets/Action/view_stream_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewStreamIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewStreamIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewStreamIcon.Style = SvgIcon;
ViewStreamIcon.displayName = 'ViewStreamIcon';

export default ViewStreamIcon
