import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatListNumberedRtlIconSvg from '../../assets/Editor/format_list_numbered_rtl_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatListNumberedRtlIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatListNumberedRtlIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatListNumberedRtlIcon.Style = SvgIcon;
FormatListNumberedRtlIcon.displayName = 'FormatListNumberedRtlIcon';

export default FormatListNumberedRtlIcon
