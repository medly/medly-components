import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FileCopyIconSvg from '../../assets/Content/file_copy_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FileCopyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FileCopyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FileCopyIcon.Style = SvgIcon;
FileCopyIcon.displayName = 'FileCopyIcon';

export default FileCopyIcon
