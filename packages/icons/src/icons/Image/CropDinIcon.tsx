import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropDinIconSvg from '../../assets/Image/crop_din_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropDinIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CropDinIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CropDinIcon.Style = SvgIcon;
CropDinIcon.displayName = 'CropDinIcon';

export default CropDinIcon
