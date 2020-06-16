import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FontDownloadIconSvg from '../../assets/Content/font_download_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FontDownloadIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FontDownloadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FontDownloadIcon.Style = SvgIcon;
FontDownloadIcon.displayName = 'FontDownloadIcon';

export default FontDownloadIcon
