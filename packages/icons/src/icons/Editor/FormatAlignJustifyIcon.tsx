import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatAlignJustifyIconSvg from '../../assets/Editor/format_align_justify_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatAlignJustifyIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatAlignJustifyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatAlignJustifyIcon.Style = SvgIcon;
FormatAlignJustifyIcon.displayName = 'FormatAlignJustifyIcon';

export default FormatAlignJustifyIcon
