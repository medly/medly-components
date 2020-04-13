import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VideogameAssetIconSvg from '../../assets/Hardware/videogame_asset_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VideogameAssetIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VideogameAssetIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VideogameAssetIcon.Style = SvgIcon;
VideogameAssetIcon.displayName = 'VideogameAssetIcon';

export default VideogameAssetIcon
