import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AndroidIconSvg from '../../assets/Action/android_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AndroidIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AndroidIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AndroidIcon.Style = SvgIcon;
AndroidIcon.displayName = 'AndroidIcon';

export default AndroidIcon
