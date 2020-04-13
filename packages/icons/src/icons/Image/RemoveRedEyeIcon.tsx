import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RemoveRedEyeIconSvg from '../../assets/Image/remove_red_eye_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveRedEyeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RemoveRedEyeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RemoveRedEyeIcon.Style = SvgIcon;
RemoveRedEyeIcon.displayName = 'RemoveRedEyeIcon';

export default RemoveRedEyeIcon
