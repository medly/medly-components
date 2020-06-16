import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AttachmentIconSvg from '../../assets/File/attachment_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AttachmentIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AttachmentIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AttachmentIcon.Style = SvgIcon;
AttachmentIcon.displayName = 'AttachmentIcon';

export default AttachmentIcon
