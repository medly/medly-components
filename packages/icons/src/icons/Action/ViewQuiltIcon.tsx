import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewQuiltIconSvg from '../../assets/Action/view_quilt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewQuiltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewQuiltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewQuiltIcon.Style = SvgIcon;
ViewQuiltIcon.displayName = 'ViewQuiltIcon';

export default ViewQuiltIcon
