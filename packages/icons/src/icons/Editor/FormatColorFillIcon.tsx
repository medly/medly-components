import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatColorFillIconSvg from '../../assets/Editor/format_color_fill_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatColorFillIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatColorFillIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatColorFillIcon.Style = SvgIcon;
FormatColorFillIcon.displayName = 'FormatColorFillIcon';

export default FormatColorFillIcon
