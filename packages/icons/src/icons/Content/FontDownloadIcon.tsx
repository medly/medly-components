import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FontDownloadIconSvg from '../../assets/Content/font_download_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FontDownloadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FontDownloadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FontDownloadIcon.Style = SvgIcon;
FontDownloadIcon.displayName = 'FontDownloadIcon';

export default FontDownloadIcon
