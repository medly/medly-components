import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropSquareIconSvg from '../../assets/Image/crop_square_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropSquareIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CropSquareIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CropSquareIcon.Style = SvgIcon;
CropSquareIcon.displayName = 'CropSquareIcon';

export default CropSquareIcon
