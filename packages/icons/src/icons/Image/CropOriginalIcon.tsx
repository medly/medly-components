import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropOriginalIconSvg from '../../assets/Image/crop_original_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropOriginalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CropOriginalIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CropOriginalIcon.Style = SvgIcon;
CropOriginalIcon.displayName = 'CropOriginalIcon';

export default CropOriginalIcon
