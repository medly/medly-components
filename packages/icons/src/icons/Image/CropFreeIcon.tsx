import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropFreeIconSvg from '../../assets/Image/crop_free_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropFreeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CropFreeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CropFreeIcon.Style = SvgIcon;
CropFreeIcon.displayName = 'CropFreeIcon';

export default CropFreeIcon
