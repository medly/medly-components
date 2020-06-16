import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import UploadIconSvg from '../../assets/File/upload_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UploadIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UploadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UploadIcon.Style = SvgIcon;
UploadIcon.displayName = 'UploadIcon';

export default UploadIcon
