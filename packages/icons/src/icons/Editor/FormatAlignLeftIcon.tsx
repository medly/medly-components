import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatAlignLeftIconSvg from '../../assets/Editor/format_align_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatAlignLeftIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatAlignLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatAlignLeftIcon.Style = SvgIcon;
FormatAlignLeftIcon.displayName = 'FormatAlignLeftIcon';

export default FormatAlignLeftIcon
