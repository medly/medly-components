import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CropPortraitIconSvg from '../../assets/Image/crop_portrait_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropPortraitIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropPortraitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropPortraitIcon.Style = SvgIcon;
CropPortraitIcon.displayName = 'CropPortraitIcon';

export default CropPortraitIcon
