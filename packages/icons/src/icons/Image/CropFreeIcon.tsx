import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CropFreeIconSvg from '../../assets/Image/crop_free_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropFreeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropFreeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropFreeIcon.Style = SvgIcon;
CropFreeIcon.displayName = 'CropFreeIcon';

export default CropFreeIcon
