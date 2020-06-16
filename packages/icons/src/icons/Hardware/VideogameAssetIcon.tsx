import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VideogameAssetIconSvg from '../../assets/Hardware/videogame_asset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideogameAssetIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VideogameAssetIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VideogameAssetIcon.Style = SvgIcon;
VideogameAssetIcon.displayName = 'VideogameAssetIcon';

export default VideogameAssetIcon
