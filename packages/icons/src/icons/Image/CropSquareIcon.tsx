import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CropSquareIconSvg from '../../assets/Image/crop_square_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropSquareIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropSquareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropSquareIcon.Style = SvgIcon;
CropSquareIcon.displayName = 'CropSquareIcon';

export default CropSquareIcon
