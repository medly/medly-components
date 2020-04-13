import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatBoldIconSvg from '../../assets/Editor/format_bold_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatBoldIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatBoldIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatBoldIcon.Style = SvgIcon;
FormatBoldIcon.displayName = 'FormatBoldIcon';

export default FormatBoldIcon
