import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DownloadIconSvg from '../../assets/File/download_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DownloadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DownloadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DownloadIcon.Style = SvgIcon;
DownloadIcon.displayName = 'DownloadIcon';

export default DownloadIcon
