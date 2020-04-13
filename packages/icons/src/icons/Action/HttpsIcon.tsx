import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HttpsIconSvg from '../../assets/Action/https_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HttpsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HttpsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HttpsIcon.Style = SvgIcon;
HttpsIcon.displayName = 'HttpsIcon';

export default HttpsIcon
