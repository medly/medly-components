import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropRotateIconSvg from '../../assets/Image/crop_rotate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropRotateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CropRotateIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CropRotateIcon.Style = SvgIcon;
CropRotateIcon.displayName = 'CropRotateIcon';

export default CropRotateIcon
