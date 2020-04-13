import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CropLandscapeIconSvg from '../../assets/Image/crop_landscape_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CropLandscapeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CropLandscapeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CropLandscapeIcon.Style = SvgIcon;
CropLandscapeIcon.displayName = 'CropLandscapeIcon';

export default CropLandscapeIcon
