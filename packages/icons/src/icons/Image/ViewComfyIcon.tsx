import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewComfyIconSvg from '../../assets/Image/view_comfy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewComfyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewComfyIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewComfyIcon.Style = SvgIcon;
ViewComfyIcon.displayName = 'ViewComfyIcon';

export default ViewComfyIcon
