import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropLandscapeIconSvg from '../../assets/Image/crop_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropLandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CropLandscapeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CropLandscapeIcon.Style = SvgIcon;
CropLandscapeIcon.displayName = 'CropLandscapeIcon';

export default CropLandscapeIcon
