import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WebAssetIconSvg from '../../assets/Media/web_asset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WebAssetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WebAssetIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WebAssetIcon.Style = SvgIcon;
WebAssetIcon.displayName = 'WebAssetIcon';

export default WebAssetIcon
