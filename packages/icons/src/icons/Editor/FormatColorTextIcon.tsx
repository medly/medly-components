import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatColorTextIconSvg from '../../assets/Editor/format_color_text_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatColorTextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatColorTextIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatColorTextIcon.Style = SvgIcon;
FormatColorTextIcon.displayName = 'FormatColorTextIcon';

export default FormatColorTextIcon
