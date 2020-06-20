import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CropIconSvg from '../../assets/Image/crop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropIcon.Style = SvgIcon;
CropIcon.displayName = 'CropIcon';

export default CropIcon
