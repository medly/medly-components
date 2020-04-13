import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WebAssetIconSvg from '../../assets/Media/web_asset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WebAssetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <WebAssetIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

WebAssetIcon.Style = SvgIcon;
WebAssetIcon.displayName = 'WebAssetIcon';

export default WebAssetIcon
