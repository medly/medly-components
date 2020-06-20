import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DownloadDoneIconSvg from '../../assets/File/download_done_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DownloadDoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DownloadDoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DownloadDoneIcon.Style = SvgIcon;
DownloadDoneIcon.displayName = 'DownloadDoneIcon';

export default DownloadDoneIcon
