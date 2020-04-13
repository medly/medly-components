import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SdStorageIconSvg from '../../assets/Device/sd_storage_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SdStorageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SdStorageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SdStorageIcon.Style = SvgIcon;
SdStorageIcon.displayName = 'SdStorageIcon';

export default SdStorageIcon
