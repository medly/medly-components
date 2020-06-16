import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CropOriginalIconSvg from '../../assets/Image/crop_original_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropOriginalIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropOriginalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropOriginalIcon.Style = SvgIcon;
CropOriginalIcon.displayName = 'CropOriginalIcon';

export default CropOriginalIcon
