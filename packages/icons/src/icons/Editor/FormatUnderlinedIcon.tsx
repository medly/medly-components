import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatUnderlinedIconSvg from '../../assets/Editor/format_underlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatUnderlinedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatUnderlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatUnderlinedIcon.Style = SvgIcon;
FormatUnderlinedIcon.displayName = 'FormatUnderlinedIcon';

export default FormatUnderlinedIcon
