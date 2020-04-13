import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MonochromePhotosIconSvg from '../../assets/Image/monochrome_photos_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MonochromePhotosIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MonochromePhotosIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MonochromePhotosIcon.Style = SvgIcon;
MonochromePhotosIcon.displayName = 'MonochromePhotosIcon';

export default MonochromePhotosIcon
