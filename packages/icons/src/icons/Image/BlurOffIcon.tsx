import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BlurOffIconSvg from '../../assets/Image/blur_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BlurOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BlurOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BlurOffIcon.Style = SvgIcon;
BlurOffIcon.displayName = 'BlurOffIcon';

export default BlurOffIcon
