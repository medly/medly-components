import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AttachFileIconSvg from '../../assets/Editor/attach_file_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AttachFileIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AttachFileIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AttachFileIcon.Style = SvgIcon;
AttachFileIcon.displayName = 'AttachFileIcon';

export default AttachFileIcon
