import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropRotateIconSvg from '../../assets/Image/crop_rotate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropRotateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropRotateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropRotateIcon.Style = SvgIcon;
CropRotateIcon.displayName = 'CropRotateIcon';

export default CropRotateIcon
