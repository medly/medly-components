import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CropDinIconSvg from '../../assets/Image/crop_din_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropDinIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropDinIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropDinIcon.Style = SvgIcon;
CropDinIcon.displayName = 'CropDinIcon';

export default CropDinIcon
